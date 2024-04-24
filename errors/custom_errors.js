
class customAPIError extends Error{
    constructor(message, statusCode){
        super(message)
        this.statusCode= statusCode;
    }
}

const createCustomError= (msg, statusCode)=>{
    return new customAPIError(msg, statusCode)
}

const error_tasks= {
    createCustomError,
    customAPIError,
}

export default error_tasks;