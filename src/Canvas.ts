import SelectorError from "./errors/SelectorError"
import ICanvasObject from "./objects/ICanvasObject"

export default class Canvas
{

    element: HTMLCanvasElement
    parent: HTMLElement | null
    ctx: CanvasRenderingContext2D
    objects: ICanvasObject[]
    isActive: boolean
    static all: Canvas[] = []

    constructor ()
    {
        this.element = document.createElement('canvas')
        this.ctx = this.element.getContext('2d') as CanvasRenderingContext2D
        this.objects = []
        this.isActive = false
        this.parent = null

        Canvas.all.push(this)
        this.activate()
    }

    public create (selector: string) : void
    {
        const parent = document.querySelector(selector)

        if (parent == null) {
            throw new SelectorError(`Element ${selector} was not found`)
        }

        parent.appendChild(this.element)
        this.parent = parent as HTMLElement // WTF?

        this.render()
        this.resize(this.element)
        window.addEventListener('resize', () => this.resize(this.element))
    }

    public activate () : void
    {
        for (let canvas of Canvas.all) {
            canvas.isActive = false
        }
        this.isActive = true
    }

    public static get active () : Canvas
    {
        return Canvas.all.filter(e => e.isActive)[0]
    }

    public animate (callback: Function)
    {
        this.activate()
        callback()
    }

    private render ()
    {
        setInterval(() => {
            this.ctx.clearRect(0, 0, this.width, this.height)
            for (let object of this.objects) {
                object.draw()
            }
        }, 10)
    }

    private resize (element: HTMLCanvasElement)
    {
        element.width = this.parent!.offsetWidth
        element.height = this.parent!.offsetHeight
    }

    get width ()
    {
        return this.element.width
    }

    get height ()
    {
        return this.element.height
    }

}