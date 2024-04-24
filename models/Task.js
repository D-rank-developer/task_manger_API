import  mongoose  from "mongoose";

const TaskSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "must provide name"],
        trim: true,
        maxlength:[20, "name must not be more than 20 characters"],
    },
    completed: {
        type: Boolean,
       // default: true,
    },
})

const Task= mongoose.model("Task", TaskSchema);

export default Task;