import { Bcrypt, generateToken } from '../helpers/helpers.js';
import { Playlist } from '../models/Playlist.js';
import { User } from '../models/User.js';

export async function createUser(req, res) {
  try {
    const userName = req.body.userName;
    const email = req.body.email;
    const password = req.body.password;

    const hashedPassword = await Bcrypt.hashPassword(password);

    const newUser = {
      userName,
      email,
      password: hashedPassword,
    };

    const user = await User.GetUserByEmail(email);

    if (user) {
      return res.status(400).json({ success: false, message: 'The chosen email has already been used' });
    }

    await User.CreateUser(newUser);

    res.status(200).json({ success: true, message: 'User Created Successfully!' });
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
}

export async function loginUser(req, res) {
  try {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
      throw new Error('Fill in email and password.');
    }

    const user = await User.GetUserByEmail(email);

    if (!user) {
      throw new Error('Check username and password.');
    }

    const match = await Bcrypt.comparePassword(password, user.password);

    if (!match) {
      throw new Error('Check username and password.');
    }

    const token = await generateToken({ id: user.id, userName: user.userName });

    res.cookie('authToken', token, { httpOnly: true }).json({ success: true, token });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
}

export function logoutUser(req, res) {
  try {
    res.clearCookie('authToken').json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
}

export async function followPlaylist(req, res) {
  try {
    const userId = req.obj.id;
    const playlistId = req.body.playlistId;

    const obj = {
      userId,
      playlistId,
    };

    await Playlist.FollowPlaylist(obj);

    return res.json({ success: true });
  } catch (error) {
    return res.json({ success: false });
  }
}

export async function unFollowPlaylist(req, res) {
  try {
    //FOR TESTING
    //const userId = req.body.userId;

    const userId = req.obj.id;
    const playlistId = req.body.playlistId;

    const obj = {
      userId,
      playlistId,
    };

    await Playlist.UnFollowPlaylist(obj);

    return res.json({ success: true });
  } catch (error) {
    return res.json({ success: false });
  }
}

export async function getFollowedPlaylists(req, res) {
  try {
    const userId = req.obj.id;

    const followedPlaylists = await Playlist.GetFollowedPlaylists(userId);

    return res.json({ success: true, followedPlaylists });
  } catch (error) {}
}
