import { nanoid } from 'nanoid';
import { Bcrypt } from '../helpers/helpers.js';

export async function createUser(req, res) {
  try {
    let user = req.body;
    user.id = nanoid();

    const hashedPassword = await Bcrypt.hashPassword(user.password);

    user.password = hashedPassword;
    console.log(user);

    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
}
