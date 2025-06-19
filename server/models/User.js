import mongoose, { Types } from "mongoose";

const taskSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        maxLength: [50, "Name must be less than 50 characters"]
    },
    comment: String,
    completed: {
        type: Boolean,
        default: false
    }

}, {timestamps: true})


const Task = mongoose.model("Task", taskSchema)
export default Task
