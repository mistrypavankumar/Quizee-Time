import nc from "next-connect";
import CQuestion from "../../../../models/CQuestion";
import db from "../../../../utils/db";

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const cquestions1 = await CQuestion.find({});

  await db.disconnect();
  res.send(cquestions1);
});

export default handler;
