import mongoose from "mongoose";

// creating schema
const cppQuestionSchema = new mongoose.Schema({
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

const CppQuestion =
  mongoose.models.CppQuestions ||
  mongoose.model("CppQuestions", cppQuestionSchema);

export default CppQuestion;
