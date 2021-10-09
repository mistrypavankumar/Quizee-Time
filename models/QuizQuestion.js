import mongoose from "mongoose";

// creating schema
const quizQuestionSchema = new mongoose.Schema({
  category: { type: String, required: true },
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

const QuizQuestion =
  mongoose.models.QuizQuestion ||
  mongoose.model("QuizQuestion", quizQuestionSchema);

export default QuizQuestion;
