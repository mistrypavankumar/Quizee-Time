import nc from "next-connect";
import QuizQuestion from "../../models/QuizQuestion";
import db from "../../utils/db";
import { data } from "../../utils/data";
import User from "../../models/User";

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  // await User.deleteMany();
  // await User.insertMany(data.users);
  await QuizQuestion.deleteMany();
  await QuizQuestion.insertMany(data.quizquestions);
  await db.disconnect();
  res.send({ message: "Seeded Successfully" });
});

export default handler;
