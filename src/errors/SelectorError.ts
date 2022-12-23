export default class SelectorError extends Error
{

    constructor (message: string)
    {
        super(message)
        this.name = "SelectorError"
    }
    
}