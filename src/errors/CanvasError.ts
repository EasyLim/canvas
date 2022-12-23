export default class CanvasError extends Error
{

    constructor (message: string)
    {
        super(message)
        this.name = "CanvasError"
    }
    
}