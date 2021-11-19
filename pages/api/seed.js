import nc from "next-connect";
import QuizQuestion from "../../models/QuizQuestion";
import db from "../../utils/db";
import { cquizData, userData, pyquizData } from "../../utils/data";
import User from "../../models/User";

const handler = nc();

handler.get(async (req, res) => {
  // connetion to database
  await db.connect();

  await User.deleteMany();
  await User.insertMany(userData.users);

  await QuizQuestion.deleteMany();
  await QuizQuestion.insertMany(cquizData.quizQuestions);
  await QuizQuestion.insertMany(pyquizData.quizQuestions);

  // disconnected database
  await db.disconnect();

  res.send({ message: "Seeded Successfully" });
});

export default handler;
