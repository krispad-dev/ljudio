import { Playlist } from '../models/Playlist.js';

export async function createPlaylist(req, res) {
  try {
    // ID of the currently logged in user
    const userId = req.obj.id;

    // Title for the playlist
    const title = req.body.title;

    // Complete playlist object to store in database
    const playList = { userId, title };

    // Store playlist in database
    await Playlist.CreatePlaylist(playList);

    return res.status(201).json({ success: true });
  } catch (err) {
    return res.status(400).json({ success: false });
  }
}

export async function removePlaylist(req, res) {
  try {
    const userId = req.obj.id;
    const playlistId = req.body.id;

    const obj = {
      playlistId,
      userId,
    };

    await Playlist.RemovePlaylist(obj);

    return res.status(201).json({ success: true });
  } catch (err) {
    return res.status(400).json({ success: false });
  }
}

export async function updatePlaylistTitle(req, res) {
  try {
    const title = req.body.title;
    const playlistId = req.body.playlistId;

    const data = { title, playlistId };

    await Playlist.UpdateUserPlaylistTitle(data);

    return res.json({ success: true });

  } catch (error) {
    return res.status(400).json({ success: false });
  }
}

export async function getAllUserPlaylists(req, res) {
  try {
    // User id from middleware
    const userId = req.obj.id;

    //Gets all playlists from one user
    const userPlaylists = await Playlist.GetAllUserPlaylists(userId);

    return res.status(200).json({ success: true, userPlaylists });
  } catch (error) {
    return res.status(400).json({ success: false });
  }
}

export async function saveSongToUserPlaylist(req, res) {
  try {
    // videoId and playlistId from frontend
    const songInfo = {
      videoId: req.body.videoId,
      playlistId: req.body.playlistId,
    };

    // Saves the song to playlist.
    await Playlist.SaveSongToPlaylist(songInfo);

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(400).json({ success: false });
  }
}

export async function removeSongFromPlaylist(req, res) {
  try {
    const userId = req.obj.id;
    // videoId and playlistId from frontend
    const videoId = req.body.videoId;
    const playlistId = req.body.playlistId;

    //Checks if logged in user is the owner of the playlists
    const isUserPlaylist = await Playlist.checkIfUserOwnsPlaylist({ userId, playlistId });

    if (isUserPlaylist.length === 0) {
      return res.status(400).json({ success: false, message: 'Unable to remove song from other users playlist' });
    }

    const obj = {
      videoId,
      playlistId,
    };

    await Playlist.RemoveSongFromPlaylist(obj);

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
    let playlist = await Playlist.GetOneUserPlaylist(playlistId);

    return res.status(200).json({ success: true, playlist });
  } catch (error) {
    return res.status(400).json({ success: false });
  }
}

export async function getAllPlaylists(req, res) {
  try {
    const playlists = await Playlist.GetAllPlaylists();

    return res.json({ success: true, playlists });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
}
export async function searchPlaylists(req, res) {
  try {
    const { searchString } = req.query;

    const playlists = await Playlist.SearchPlaylists(searchString);

    return res.json({ success: true, playlists });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
}
