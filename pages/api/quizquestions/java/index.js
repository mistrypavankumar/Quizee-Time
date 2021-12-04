import nc from "next-connect";
import JavaQuestion from "../../../../models/JavaQuestion";
import db from "../../../../utils/db";

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const javaquestions1 = await JavaQuestion.find({});

  await db.disconnect();
  res.send(javaquestions1);
});

export default handler;
