import nc from "next-connect";
import QuizQuestion from "../../models/QuizQuestion";
import db from "../../utils/db";
import { cquizData, data, pyquizData } from "../../utils/data";

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  // await User.deleteMany();
  // await User.insertMany(data.users);
  await QuizQuestion.deleteMany();
  await QuizQuestion.insertMany(cquizData.quizQuestions);
  await QuizQuestion.insertMany(pyquizData.quizQuestions);
  await db.disconnect();
  res.send({ message: "Seeded Successfully" });
});

export default handler;
