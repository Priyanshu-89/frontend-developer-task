import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    title: String,
    completed: Boolean,
    userId: String,
  },
  { timestamps: true }
);

export default mongoose.models.Task || mongoose.model("Task", TaskSchema);
