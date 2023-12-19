import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts"
import { Perceptron } from "../models/perceptron"

export const AccuracyGraph: React.FC<{ perceptron: Perceptron }> = ({ perceptron }) => {
    return <LineChart width={900} height={500} data={perceptron.accuracy.map((a, i) => {
        return {
            epochs: perceptron.weightSnapshots[i].epoch,
            accuracy: a
        }
    })}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="epochs" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="accuracy" stroke="#82ca9d" />
    </LineChart>
}