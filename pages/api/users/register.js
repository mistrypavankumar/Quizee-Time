import nc from "next-connect";
import User from "../../../models/User";
import db from "../../../utils/db";
import bcrypt from "bcryptjs";
import { signToken } from "../../../utils/auth";

const handler = nc();

handler.post(async (req, res) => {
  // Connecting to database
  await db.connect();

  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password),
    isAdmin: false,
  });

  // Saving new user data in the database
  const user = await newUser.save();

  // disconnect database
  await db.disconnect();

  const token = signToken(user);
  res.send({
    token,
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  });
});

export default handler;
