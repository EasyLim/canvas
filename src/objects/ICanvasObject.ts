import Canvas from "../Canvas"

export default interface ICanvasObject
{
    x: number
    y: number
    canvas: Canvas | null
    draw() : void
}