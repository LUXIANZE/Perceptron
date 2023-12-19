import { randomIntFromInterval } from "./random"

export const weightGenerator = () => {
    if (randomIntFromInterval(0, 1) == 1) {
        return Math.random()
    } else {
        return -Math.random()
    }
}