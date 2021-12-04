import nc from "next-connect";
import db from "../../utils/db";
import {
  cquizData,
  userData,
  pyquizData,
  cppquizData,
  javaquizData,
} from "../../utils/data";
import User from "../../models/User";
import CQuestion from "../../models/CQuestion";
import CppQuestion from "../../models/CppQuestion";
import JavaQuestion from "../../models/JavaQuestion";
import PythonQuestion from "../../models/PythonQuestion";

const handler = nc();

handler.get(async (req, res) => {
  // connetion to database
  await db.connect();

  await User.deleteMany();
  await User.insertMany(userData.users);

  await CQuestion.deleteMany();
  await CQuestion.insertMany(cquizData.quizQuestions);

  await CppQuestion.deleteMany();
  await CppQuestion.insertMany(cppquizData.quizQuestions);

  await JavaQuestion.deleteMany();
  await JavaQuestion.insertMany(javaquizData.quizQuestions);

  await PythonQuestion.deleteMany();
  await PythonQuestion.insertMany(pyquizData.quizQuestions);

  // disconnected database
  await db.disconnect();

  res.send({ message: "Seeded Successfully" });
});

export default handler;
