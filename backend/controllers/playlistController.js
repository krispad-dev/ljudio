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
    await Playlists.CreatePlaylist(playList);

    return res.status(201).json({ success: true });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ success: false });
  }
}

export async function removePlaylist(req, res) {

  try {
    console.log(req.body);
    const id = req.body.id;

    await Playlists.RemovePlaylist(id);

    return res.status(201).json({ success: true });
  } catch (err) {
    return res.status(400).json({ success: false });
  }
}

export async function getAllUserPlaylists(req, res) {
  try {
    // User id from middleware
    const userId = req.obj.id;

    //Gets all playlists from one user
    const userPlaylists = await Playlists.GetAllUserPlaylists(userId);

    return res.status(200).json({ success: true, userPlaylists });
  } catch (error) {
    return res.status(400).json({ success: false });
  }
}

export async function saveSongToUserPlaylist(req, res) {
  try {
    // videoId and playlistId from frontend
    const songInfo = req.body;

    songInfo.id = nanoid();

    // Saves the song to playlist.
    await Playlists.SaveSongToPlaylist(songInfo);

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(400).json({ success: false });
  }
}
export async function removeSongFromPlaylist(req, res) {
  try {
    // videoId and playlistId from frontend
    const songInfo = req.body;

    await Playlists.RemoveSongFromPlaylist(songInfo);

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(400).json({ success: false });
  }
}

export async function getOneUserPlaylist(req, res) {
  try {
    //PlaylistID from url params
    const playlistId = req.params.id;

    //Get one playlist from database
    const playlist = await Playlists.GetOneUserPlaylist(playlistId)[0];

    // const formattedPlaylist = formatPlaylists(playlist);

    playlist.songs = playlist.songs.split(',');

    console.log(playlist);

    return res.status(200).json({ success: true, playlist });
  } catch (error) {
    return res.status(400).json({ success: false });
  }
}
