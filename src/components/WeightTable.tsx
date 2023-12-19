import { Row, Table } from "antd";
import { Perceptron } from "../models/perceptron";

export const WeightTable: React.FC<{ perceptron: Perceptron, onRow: any }> = ({ perceptron: data, onRow }) => {
    return <>
        <Row>
            <Table
                size="small"
                style={{
                    cursor: 'pointer'
                }}
                dataSource={data.weightSnapshots.map((weightSnapshot, index) => {
                    return {
                        key: index,
                        epochs: weightSnapshot.epoch,
                        w1: weightSnapshot.weights[0],
                        w2: weightSnapshot.weights[1],
                        wb: weightSnapshot.weights[2],
                        // testThisWeight: <Button onClick={() => {
                        //     const perceptron = new Perceptron(
                        //         3,
                        //         (n: number) => { return n > 0 ? 1 : 0; },
                        //         0.1,
                        //         true,
                        //         weights)
                        //     const prediction = {
                        //         "0,0": perceptron.predict([0, 0]),
                        //         "0,1": perceptron.predict([0, 1]),
                        //         "1,0": perceptron.predict([1, 0]),
                        //         "1,1": perceptron.predict([1, 1]),
                        //     }
                        //     console.log(perceptron)
                        //     console.log(prediction)
                        // }}>Test</Button>
                    }
                })}
                columns={[{
                    title: 'Epochs',
                    dataIndex: 'epochs',
                    key: 'epocs'
                }, {
                    title: 'W1',
                    dataIndex: 'w1',
                    key: 'w1'
                }, {
                    title: 'W2',
                    dataIndex: 'w2',
                    key: 'w2'
                }, {
                    title: 'WB',
                    dataIndex: 'wb',
                    key: 'wb'
                    },
                    // {
                    // title: 'Test With This Weight',
                    // dataIndex: 'testThisWeight',
                    // key: 'testThisWeight'
                    // }
                ]}
                onRow={onRow}
                scroll={{ y: 400 }}
                pagination={{ pageSize: data.weightSnapshots.length, position: ['none'] }}
            />
        </Row>
        {/* <Divider orientation="left" />
        <Row justify="space-around" align="middle">
            <Col span={12}>
                <Button>Next</Button>
            </Col>
            <Col span={12}>
                <Button>Prev</Button>
            </Col>
        </Row> */}
    </>
}