import error_tasks from "../errors/custom_errors.js";
const errorHandlerMiddleware = (err,req,res,next)=>{
    if(err instanceof customAPIError) {
        return res.status(err.statusCode).json({msg: err.message})
    }
    
    return res.status(500).json({msg:`Something went wrong, Try again`})
}

export default errorHandlerMiddleware;