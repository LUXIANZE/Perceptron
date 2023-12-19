import './App.css'
import { AND_GATE_SAMPLES, DATASET_3, NAND_GATE_SAMPLES, OR_GATE_SAMPLES, XOR_GATE_SAMPLES } from './data/samples';
import { Perceptron } from './models/perceptron'
import { SolutionChart } from './components/SolutionChart';
import { Coordination } from './models/coordination';
import { useEffect, useState } from 'react';
import { Button, Col, InputNumber, Row, Table } from 'antd';
import { WeightTable } from './components/WeightTable';
// @ts-ignore
import { ConnectProvider, Connect } from 'react-connect-lines';
import { AccuracyGraph } from './components/AccuracyGraph';

function App() {

  const stepFunction = (n: number) => {
    return n > 0 ? 1 : 0;
  }

  const [coordinates, setCoordinates] = useState<Coordination[]>()
  const [weightSnapshotIndex, setWeightSnapshotIndex] = useState(0)
  const [input1, setInput1] = useState(0)
  const [input2, setInput2] = useState(0)
  const [selectedPerceptron, setSelectedPerceptron] = useState<"AND" | "OR" | "NAND" | "MANY" | "XOR">()
  const [domain, setDomain] = useState([-5, 5])

  const [manyDataPerceptron] = useState(new Perceptron(DATASET_3[0].features.length, stepFunction, 0.001, true, 0))
  const [andGatePerceptron] = useState(new Perceptron(AND_GATE_SAMPLES[0].features.length, stepFunction, 0.1, true, 0))
  const [nandGatePerceptron] = useState(new Perceptron(NAND_GATE_SAMPLES[0].features.length, stepFunction, 0.1, true, 0))
  const [orGatePerceptron] = useState(new Perceptron(OR_GATE_SAMPLES[0].features.length, stepFunction, 0.1, true, 0))
  const [xorGatePerceptron] = useState(new Perceptron(XOR_GATE_SAMPLES[0].features.length, stepFunction, 0.1, true, 0))



  useEffect(() => {
    if (selectedPerceptron) {

      if (["AND", "OR", "NAND", "XOR"].includes(selectedPerceptron)) {
        setDomain([-5, 5])
      } else {
        setDomain([-400, 400])
      }

      if (selectedPerceptron === "AND") {
        (async () => {
          const negativeSamples = AND_GATE_SAMPLES.filter(sample => sample.label == 0)
          const positiveSamples = AND_GATE_SAMPLES.filter(sample => sample.label == 1)

          andGatePerceptron.recordingFrequency = 1;
          await andGatePerceptron.train(positiveSamples, negativeSamples, 50)
          const solutionLine = getSolution(andGatePerceptron.weightSnapshots[weightSnapshotIndex].weights, -0.5, 1.5)
          setCoordinates(solutionLine)
        })()
      }

      if (selectedPerceptron === "OR") {
        (async () => {
          const negativeSamples = OR_GATE_SAMPLES.filter(sample => sample.label == 0)
          const positiveSamples = OR_GATE_SAMPLES.filter(sample => sample.label == 1)

          orGatePerceptron.recordingFrequency = 1;
          await orGatePerceptron.train(positiveSamples, negativeSamples, 50)
          const solutionLine = getSolution(orGatePerceptron.weightSnapshots[weightSnapshotIndex].weights, -0.5, 1.5)
          setCoordinates(solutionLine)
        })()
      }

      if (selectedPerceptron === "NAND") {
        (async () => {
          const negativeSamples = NAND_GATE_SAMPLES.filter(sample => sample.label == 0)
          const positiveSamples = NAND_GATE_SAMPLES.filter(sample => sample.label == 1)

          nandGatePerceptron.recordingFrequency = 1;
          await nandGatePerceptron.train(positiveSamples, negativeSamples, 50)
          const solutionLine = getSolution(nandGatePerceptron.weightSnapshots[weightSnapshotIndex].weights, -0.5, 1.5)
          setCoordinates(solutionLine)
        })()
      }

      if (selectedPerceptron === "XOR") {
        (async () => {
          const negativeSamples = XOR_GATE_SAMPLES.filter(sample => sample.label == 0)
          const positiveSamples = XOR_GATE_SAMPLES.filter(sample => sample.label == 1)

          xorGatePerceptron.recordingFrequency = 1;
          await xorGatePerceptron.train(positiveSamples, negativeSamples, 50)
          const solutionLine = getSolution(xorGatePerceptron.weightSnapshots[weightSnapshotIndex].weights, -0.5, 1.5)
          setCoordinates(solutionLine)
        })()
      }

      if (selectedPerceptron === "MANY") {
        (async () => {
          const negativeSamples = DATASET_3.filter(sample => sample.label == 0)
          const positiveSamples = DATASET_3.filter(sample => sample.label == 1)

          manyDataPerceptron.recordingFrequency = 100000;
          await manyDataPerceptron.train(positiveSamples, negativeSamples, 1000000)
          const solutionLine = getSolution(manyDataPerceptron.weightSnapshots[weightSnapshotIndex].weights, -100, 100)
          setCoordinates(solutionLine)
          // console.log("Negative sample perc", negativeSamples.length / SAMPLE.length * 100) // 49.8%
        })()
      }

    }
  }, [selectedPerceptron])

  useEffect(() => {
    if (selectedPerceptron) {

      if (selectedPerceptron === "AND") {
        const solutionLine = getSolution(andGatePerceptron.weightSnapshots[weightSnapshotIndex].weights, -0.5, 1.5)
        setCoordinates(solutionLine)
      }

      if (selectedPerceptron === "OR") {
        const solutionLine = getSolution(orGatePerceptron.weightSnapshots[weightSnapshotIndex].weights, -0.5, 1.5)
        setCoordinates(solutionLine)
      }

      if (selectedPerceptron === "NAND") {
        const solutionLine = getSolution(nandGatePerceptron.weightSnapshots[weightSnapshotIndex].weights, -0.5, 1.5)
        setCoordinates(solutionLine)
      }

      if (selectedPerceptron === "XOR") {
        const solutionLine = getSolution(xorGatePerceptron.weightSnapshots[weightSnapshotIndex].weights, -0.5, 1.5)
        setCoordinates(solutionLine)
      }

      if (selectedPerceptron === "MANY") {
        const solutionLine = getSolution(manyDataPerceptron.weightSnapshots[weightSnapshotIndex].weights, -100, 100)
        setCoordinates(solutionLine)
      }

    }
  }, [weightSnapshotIndex])


  /**
   * The solution is a plane, since decision boundary is 0 and our plot lives on 0
   * the equation would look like f(X,Y) = X*WX + Y*WY * B*WB
   * f(X,Y) = X*WX + Y*WY * B*WB
   * 0 = X*WX + Y*WY + B*WB
   * use X of -1 and 2 to cal Y val
   * Y = (X*WX + B*WB)/-WY
   */
  function getSolution(weights: number[], xMin: number, xMax: number): Coordination[] {
    const x1 = xMin
    const y1 = (x1 * weights[0] + 1 * weights[2]) / -weights[1]
    const x2 = xMax
    const y2 = (x2 * weights[0] + 1 * weights[2]) / -weights[1]

    return [{
      x: x1,
      y: y1
    }, {
      x: x2,
      y: y2
    }]
  }

  function rowSelection(_record: any, rowIndex: any) {
    return {
      onClick: () => {
        if (typeof rowIndex !== "undefined") {
          setWeightSnapshotIndex(rowIndex)
        }
      }
    };
  }


  return (
    <>
      <ConnectProvider>
        <Row>
          <Col span={24}>
            <Button onClick={() => setSelectedPerceptron("AND")}>AND</Button>
            <Button onClick={() => setSelectedPerceptron("OR")}>OR</Button>
            <Button onClick={() => setSelectedPerceptron("NAND")}>NAND</Button>
            <Button onClick={() => setSelectedPerceptron("MANY")}>MANY</Button>
            <Button onClick={() => setSelectedPerceptron("XOR")}>XOR</Button>
          </Col>
        </Row>
        {selectedPerceptron === "AND" && <>
          <Row>
            <Col span={12}>
              <SolutionChart lineCoordinates={coordinates} samples={AND_GATE_SAMPLES} domain={domain} />
            </Col>
            <Col span={12}>
              <Table pagination={false} style={{ marginTop: 100 }} dataSource={[{
                x1: 0,
                x2: 0,
                y: 0
              }, {
                x1: 0,
                x2: 1,
                y: 0
              }, {
                x1: 1,
                x2: 0,
                y: 0
              }, {
                x1: 1,
                x2: 1,
                y: 1
              }]} columns={[
                {
                  title: 'x1',
                  dataIndex: 'x1',
                  key: 'x1',
                },
                {
                  title: 'x2',
                  dataIndex: 'x2',
                  key: 'x2',
                },
                {
                  title: 'output',
                  dataIndex: 'y',
                  key: 'y',
                },
              ]} />
            </Col>
          </Row>
          <Row gutter={20}>
            <Col span={12}>
              <WeightTable perceptron={andGatePerceptron} onRow={rowSelection} />
            </Col>
            <Col span={12}>
              <AccuracyGraph perceptron={andGatePerceptron} />
            </Col>
          </Row>
        </>}
        {selectedPerceptron === "OR" && <>
          <Row>
            <Col span={12}>
              <SolutionChart lineCoordinates={coordinates} samples={OR_GATE_SAMPLES} domain={domain} />
            </Col>
            <Col span={12}>
              <Table pagination={false} style={{ marginTop: 100 }} dataSource={[{
                x1: 0,
                x2: 0,
                y: 0
              }, {
                x1: 0,
                x2: 1,
                y: 1
              }, {
                x1: 1,
                x2: 0,
                y: 1
              }, {
                x1: 1,
                x2: 1,
                y: 1
              }]} columns={[
                {
                  title: 'x1',
                  dataIndex: 'x1',
                  key: 'x1',
                },
                {
                  title: 'x2',
                  dataIndex: 'x2',
                  key: 'x2',
                },
                {
                  title: 'output',
                  dataIndex: 'y',
                  key: 'y',
                },
              ]} />
            </Col>
          </Row>
          <Row gutter={20}>
            <Col span={12}>
              <WeightTable perceptron={orGatePerceptron} onRow={rowSelection} />
            </Col>
            <Col span={12}>
              <AccuracyGraph perceptron={orGatePerceptron} />
            </Col>
          </Row>
        </>}
        {selectedPerceptron === "NAND" && <>
          <Row>
            <Col span={12}>
              <SolutionChart lineCoordinates={coordinates} samples={NAND_GATE_SAMPLES} domain={domain} />
            </Col>
            <Col span={12}>
              <Table pagination={false} style={{ marginTop: 100 }} dataSource={[{
                x1: 0,
                x2: 0,
                y: 1
              }, {
                x1: 0,
                x2: 1,
                y: 1
              }, {
                x1: 1,
                x2: 0,
                y: 1
              }, {
                x1: 1,
                x2: 1,
                y: 0
              }]} columns={[
                {
                  title: 'x1',
                  dataIndex: 'x1',
                  key: 'x1',
                },
                {
                  title: 'x2',
                  dataIndex: 'x2',
                  key: 'x2',
                },
                {
                  title: 'output',
                  dataIndex: 'y',
                  key: 'y',
                },
              ]} />
            </Col>
          </Row>
          <Row gutter={20}>
            <Col span={12}>
              <WeightTable perceptron={nandGatePerceptron} onRow={rowSelection} />
            </Col>
            <Col span={12}>
              <AccuracyGraph perceptron={nandGatePerceptron} />
            </Col>
          </Row>
        </>}
        {selectedPerceptron === "MANY" && <>
          <Row>
            <Col span={24}>
              <SolutionChart lineCoordinates={coordinates} samples={DATASET_3} domain={domain} />
            </Col>
          </Row>
          <Row gutter={20}>
            <Col span={12}>
              <WeightTable perceptron={manyDataPerceptron} onRow={rowSelection} />
            </Col>
            <Col span={12}>
              <AccuracyGraph perceptron={manyDataPerceptron} />
            </Col>
          </Row>
        </>}
        {selectedPerceptron === "XOR" && <>
          <Row>
            <Col span={12}>
              <SolutionChart lineCoordinates={coordinates} samples={XOR_GATE_SAMPLES} domain={domain} />
            </Col>
            <Col span={12}>
              <Table pagination={false} style={{ marginTop: 100 }} dataSource={[{
                x1: 0,
                x2: 0,
                y: 0
              }, {
                x1: 0,
                x2: 1,
                y: 1
              }, {
                x1: 1,
                x2: 0,
                y: 1
              }, {
                x1: 1,
                x2: 1,
                y: 0
              }]} columns={[
                {
                  title: 'x1',
                  dataIndex: 'x1',
                  key: 'x1',
                },
                {
                  title: 'x2',
                  dataIndex: 'x2',
                  key: 'x2',
                },
                {
                  title: 'output',
                  dataIndex: 'y',
                  key: 'y',
                },
              ]} />
            </Col>
          </Row>
          <Row gutter={20}>
            <Col span={12}>
              <WeightTable perceptron={xorGatePerceptron} onRow={rowSelection} />
            </Col>
            <Col span={12}>
              <AccuracyGraph perceptron={xorGatePerceptron} />
            </Col>
          </Row>
        </>}


        {/* <Row>
          <Col span={24}>
            <ThreeDChart />
          </Col>
        </Row> */}

        {/**visualize perceptron: https://github.com/hermanwikner/react-connect-lines */}
        {/* <Row>
          <Col span={12} />
          <Col span={12}>
            <Connect id="element-2">
              <Button>B</Button>
            </Connect>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Connect
              id="element-1"
              connectWith={[
                { id: 'element-2', color: 'red', stroke: 'dashed' },
                { id: 'element-3', edge: 'step' },
              ]}
            >
              <Button>A</Button>
            </Connect>
          </Col>
          <Col span={12}/>
        </Row>
        <Row>
          <Col span={12} />
          <Col span={12}>
            <Connect id="element-3">
              <Button>C</Button>
            </Connect>
          </Col>
        </Row> */}

        <Row style={{ display: "none" }}>
          <Col span={8}>
          </Col>
          <Col span={8}>
            <InputNumber max={1} min={0} value={input1} onChange={value => setInput1(value == null ? 0 : value)} placeholder='input 1' style={{ margin: 5 }} />
            <InputNumber max={1} min={0} value={input2} onChange={value => setInput2(value == null ? 0 : value)} placeholder='input 2' style={{ margin: 5 }} />
            {`= ${manyDataPerceptron.predict([input1, input2])}`}
          </Col>
          <Col span={8}>
          </Col>
        </Row>
      </ConnectProvider>
    </>
  )
}

export default App
