import nc from "next-connect";
import PythonQuestion from "../../../../models/PythonQuestion";
import db from "../../../../utils/db";

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const pythonquestions1 = await PythonQuestion.find({});

  await db.disconnect();
  res.send(pythonquestions1);
});

export default handler;
