import { randomIntFromInterval } from "../utils/random";
import { Sample } from "./sample";
import { WeightSnapshot } from "./weightSnapshot";

export class Perceptron {
    weights: number[] = [];
    weightSnapshots: WeightSnapshot[] = []
    accuracy: number[] = []
    learningRate: number;
    bias: boolean;
    recordingFrequency = 10;
    activationFunction: (output: number) => number;

    constructor(features: number, activationFunction: (output: number) => number, learningRate: number = 0.1, bias: boolean = true, initialWeight: number | Function | number[] = 0) {
        // Choosing activation functions: https://www.v7labs.com/blog/neural-networks-activation-functions
        this.activationFunction = activationFunction;
        const numberWeights = features + (bias ? 1 : 0)
        for (let index = 0; index < numberWeights; index++) {
            if (typeof initialWeight == "function") {
                this.weights.push(initialWeight())
            } else if (Array.isArray(initialWeight)) {
                this.weights = initialWeight
            } else {
                this.weights.push(initialWeight)

            }
        }
        this.learningRate = learningRate;
        this.bias = bias
    }

    errorFunction(target: number, actual: number): number {
        return target - actual;
    }

    learn(input: number, error: number): number {
        return this.learningRate * error * input;
    }

    forward(inputs: number[]) {
        let dotProduct = 0;
        for (let index = 0; index < inputs.length; index++) {
            dotProduct += inputs[index] * this.weights[index];
        }
        return dotProduct;
    }

    predict(inputs: number[]) {
        let newInputs
        if (this.bias) {
            newInputs = [...inputs, 1]
        } else {
            newInputs = inputs
        }
        return this.activationFunction(this.forward(newInputs))
    }

    async train(positiveSamples: Sample[], negativeSamples: Sample[], epochs: number = 100) {
        console.log("Training")
        for (let index = 1; index < epochs + 1; index++) {
            /** Block starts */
            /** record initial accuracy */
            if (index == 1) {
                this.weightSnapshots.push({
                    epoch: 0,
                    weights: this.weights
                })
                const samples = [...positiveSamples, ...negativeSamples]
                const testResults = samples.map(s => this.predict(s.features) === s.label).filter(res => res)
                this.accuracy.push(testResults.length / samples.length * 100)
            }
            /** Block ends */

            const chosenPositiveSample = positiveSamples[randomIntFromInterval(0, positiveSamples.length - 1)]
            const positiveSamplePrediction = this.predict(chosenPositiveSample.features)
            if (positiveSamplePrediction != chosenPositiveSample.label) {
                const error = this.errorFunction(chosenPositiveSample.label, positiveSamplePrediction)
                this.weights = this.weights.map((v, i) => {
                    const inputVal = typeof chosenPositiveSample.features[i] === "undefined" ? 1 : chosenPositiveSample.features[i]
                    const adjustment = this.learn(inputVal, error)
                    return v + adjustment;
                })
            }

            const chosenNegativeSample = negativeSamples[randomIntFromInterval(0, negativeSamples.length - 1)]
            const negativeSamplePrediction = this.predict(chosenNegativeSample.features)
            if (negativeSamplePrediction != chosenNegativeSample.label) {
                const error = this.errorFunction(chosenNegativeSample.label, negativeSamplePrediction)
                this.weights = this.weights.map((v, i) => {
                    const inputVal = typeof chosenNegativeSample.features[i] === "undefined" ? 1 : chosenNegativeSample.features[i]
                    const adjustment = this.learn(inputVal, error)
                    return v + adjustment;
                })
            }

            if (index < 100 || index % this.recordingFrequency == 0) {
                this.weightSnapshots.push({
                    epoch: index,
                    weights: this.weights
                })
                const samples = [...positiveSamples, ...negativeSamples]
                const testResults = samples.map(s => this.predict(s.features) === s.label).filter(res => res)
                this.accuracy.push(testResults.length / samples.length * 100)
            }
        }
    }
}