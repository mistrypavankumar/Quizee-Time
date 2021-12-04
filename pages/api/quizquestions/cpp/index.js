import nc from "next-connect";
import CppQuestion from "../../../../models/CppQuestion";
import db from "../../../../utils/db";

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const cppquestions1 = await CppQuestion.find({});

  await db.disconnect();
  res.send(cppquestions1);
});

export default handler;
