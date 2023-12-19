import { TypedArray } from 'plotly.js'
import Plot from 'react-plotly.js'
export const ThreeDChart: React.FC = () => {
    const Tri = [
        [0, 1, 2],
        [0, 2, 3],
        [0, 3, 1],
        [1, 2, 3]
    ]

    const X = [0, 1, 0, 0]
    const Y = [0, 1, 0, 0]
    const Z = [0, 1, 0, 0]
    // const C = [
    //     'rgb(0, 0, 0)',
    //     'rgb(255, 0, 0)',
    //     'rgb(0, 255, 0)',
    //     'rgb(0, 0, 255)'
    // ]

    return <Plot data={[{
        type: 'mesh3d',
        x: X,
        y: Y,
        z: Z,
        i: Tri.map(function (f) { return f[0] }) as unknown as TypedArray,
        j: Tri.map(function (f) { return f[1] }) as unknown as TypedArray,
        k: Tri.map(function (f) { return f[2] }) as unknown as TypedArray,
        // facecolor: C,
        // flatshading: true,
    }]}
        layout={{ width: 320, height: 240, title: 'A Fancy Plot' }}
    />
}