import Canvas from "../Canvas"
import CanvasError from "../errors/CanvasError"
import ICanvasObject from "./ICanvasObject"

export default class Dot implements ICanvasObject
{

    x: number
    y: number
    canvas: Canvas | null

    constructor (x: number, y: number)
    {
        this.x = x
        this.y = y
        this.canvas = Canvas.active
        this.canvas.objects.push(this)
    }

    private get ctx () : CanvasRenderingContext2D
    {
        if (this.canvas == null) throw new CanvasError('Can not render canvas object, while canvas object is not connected with canvas')
        return this.canvas.ctx
    }

    public draw ()
    {
        this.ctx.beginPath()
        this.ctx.fillStyle = '#c88'
        this.ctx.arc(this.x, this.y, 5, 0, Math.PI*2)
        this.ctx.fill()
    }

}