import { nanoid } from 'nanoid';
import { Bcrypt, generateToken } from '../helpers/helpers.js';
import { Users } from '../models/Users.js';

export async function createUser(req, res) {
  try {
    let user = req.body;
    user.id = nanoid();

    const hashedPassword = await Bcrypt.hashPassword(user.password);

    user.password = hashedPassword;

    const emailExist = Users.getUserByEmail(user);
    console.log(Boolean(emailExist));
    console.log('FROM CONTROLLER', emailExist);

    if (emailExist) {
      return res
        .status(200)
        .json({ success: false, message: 'Email already Exist' });
    }

    Users.createUser(user);

    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
}

export async function loginUser(req, res) {
  const userInfo = req.body;

  const user = Users.getUserByEmail(userInfo);

  if (!user) {
    console.log('No user');

    return res
      .status(400)
      .json({ success: false, message: 'Wrong password or username' });
  }

  const match = await Bcrypt.comparePassword(userInfo.password, user.password);

  if (!match) {
    return res
      .status(400)
      .json({ success: false, message: 'Wrong password or username' });
  }

  const token = await generateToken({ id: user.id, userName: user.userName });

  user.token = token;

  res
    .cookie('authToken', token, {
      httpOnly: true,
    })
    .json({ success: true });
}


export function logoutUser(req, res) {
  res.clearCookie('authToken').json({ loggedIn: false });
}