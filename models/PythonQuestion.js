import mongoose from "mongoose";

// creating schema
const pythonQuestionSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  option1: { type: String, required: true },
  option2: { type: String, required: true },
  option3: { type: String, required: true },
  option4: { type: String, required: true },
  answer: { type: String, required: true },
});

const PythonQuestion =
  mongoose.models.PythonQuestions ||
  mongoose.model("PythonQuestions", pythonQuestionSchema);

export default PythonQuestion;
