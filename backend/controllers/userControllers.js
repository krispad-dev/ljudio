import { nanoid } from 'nanoid';
import { Bcrypt, generateToken } from '../helpers/helpers.js';
import { Playlists } from '../models/Playlist.js';
import { Users } from '../models/User.js';

export async function createUser(req, res) {
  try {
    let user = req.body;
    user.id = nanoid();

    const hashedPassword = await Bcrypt.hashPassword(user.password);

    user.password = hashedPassword;

    const emailExist = Users.getUserByEmail(user);

    if (emailExist) {
      return res.status(200).json({ success: false, message: 'Email already Exist' });
    }

    Users.createUser(user);

    res.status(200).json({ success: true, message: 'User Created Succedfully!' });
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
}

export async function loginUser(req, res) {
  try {
    const userInfo = req.body;

    const user = Users.getUserByEmail(userInfo);

    if (!user) {
      console.log('No user');

      return res.status(400).json({ success: false, message: 'Wrong password or username' });
    }
    const match = await Bcrypt.comparePassword(userInfo.password, user.password);

    if (!match) {
      return res.status(400).json({ success: false, message: 'Wrong password or username' });
    }
    const token = await generateToken({ id: user.id, userName: user.userName });

    user.token = token;

    res
      .status(200)
      .cookie('authToken', token, {
        httpOnly: true,
      })
      .json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false, message: error });
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

    console.log(playlistId);

    const obj = {
      userId,
      playlistId,
    };

    await Playlists.FollowPlaylist(obj);

    return res.json({ success: true });
  } catch (error) {
    return res.json({ success: false });
  }
}

export async function unFollowPlaylist(req, res) {
  try {
    const userId = req.obj.id;

    //FOR TESTING
    // const userId = '_ZVxcRrNyu4ppt-6FgqIy';

    const playlistId = req.body.playlistId;

    const obj = {
      userId,
      playlistId,
    };

    await Playlists.UnFollowPlaylist(obj);

    return res.json({ success: true });
  } catch (error) {
    return res.json({ success: false });
  }
}

export async function getFollowedPlaylists(req, res) {
  try {
    const userId = req.obj.id;

    const followedPlaylists = await Playlists.GetFollowedPlaylists({ userId });

    return res.json({ success: true, followedPlaylists });
    
  } catch (error) {
    console.log(error);
  }
}
