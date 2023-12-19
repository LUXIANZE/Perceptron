import { CartesianGrid, ComposedChart, Legend, Line, Scatter, Tooltip, XAxis, YAxis } from 'recharts';
import { Sample } from '../models/sample';
import { Coordination } from '../models/coordination';

export const SolutionChart: React.FC<{ lineCoordinates?: Coordination[], samples: Sample[], domain: number[] }> = ({ lineCoordinates, samples, domain }) => {
    function sampleToCoordinates(sample: Sample): Coordination {
        return {
            x: sample.features[0],
            y: sample.features[1]
        }
    }

    const map = new Map()
    samples.forEach(sample => {
        map.set(sample.features.toString(), sample)
    })
    const uniqueSamples = Array.from(map.values());

    const negativeSamples = uniqueSamples.filter(sample => sample.label == 0).map(sampleToCoordinates)
    const positiveSamples = uniqueSamples.filter(sample => sample.label == 1).map(sampleToCoordinates)
    return <>
        <ComposedChart width={800} height={800} >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" type="number" name="x" domain={domain} />
            <YAxis dataKey="y" type="number" name="y" domain={domain} />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Legend />
            <Scatter name="0" data={negativeSamples} fill="red" />
            <Scatter name="1" data={positiveSamples} fill="green" />
            {lineCoordinates && <Line name="decision" dataKey="y" data={lineCoordinates} stroke="#ff7300" />}
        </ComposedChart>
    </>
}