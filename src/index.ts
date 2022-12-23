import Canvas from "./Canvas"
import Dot from "./objects/Dot"

const canvas1 = new Canvas()
const canvas2 = new Canvas()

canvas1.animate(() => {
    const dot = new Dot(100, 100)
})

canvas2.animate(() => {
    const dot = new Dot(200, 200)
    let angle = 0
    setInterval(() => {
        angle += 0.1
        dot.x = Math.cos(angle)*100 + 200
        dot.y = Math.sin(angle)*100 + 200
    }, 10)
})

canvas1.create('#canvas1')
canvas2.create('#canvas2')