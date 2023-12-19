import { Sample } from "../models/sample";
import { randomIntFromInterval } from "./random";

export const samples: Sample[] = []
for (let index = 0; index < 1000; index++) {
    const element = [randomIntFromInterval(-100, 100), randomIntFromInterval(-100, 100)];
    const sample: Sample = {
        features: element,
        label: 0
    }
    samples.push(sample)
}
samples.map(s => {
    s.label = ((s.features[0] * 0.452) + (s.features[1] * -0.121) + (1 * 0.786)) > 0 ? 1 : 0
    return s
})
console.log(samples)