import nc from "next-connect";
import QuizQuestion from "../../../models/QuizQuestion";
import db from "../../../utils/db";

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const quizquestions = await QuizQuestion.find({});

  await db.disconnect();
  res.send(quizquestions);
});

export default handler;
