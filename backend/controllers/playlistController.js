import { nanoid } from 'nanoid';
import { Playlists } from '../models/Playlist.js';

export async function createPlaylist(req, res) {
  try {
    // Each playlist getting an unique ID
    const id = nanoid();

    // ID of the currently logged in user
    const userId = req.obj.id;

    // Title for the playlist
    const title = req.body.title;

    // Complete playlist object to store in database
    const playList = { id, userId, title };

    // Store playlist in database
    await Playlists.createPlaylist(playList);

    return res.status(201).json({ success: true });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ success: false });
  }
}
