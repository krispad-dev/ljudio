import { Music } from '../models/Music.js';
import { Playlist } from '../models/Playlist.js';

export async function searchMusic(req, res) {
  try {
    const searchString = req.query;
    const searchResults = await Music.SearchAll(searchString);

    return res.status(200).json({ success: true, searchResults });
  } catch (error) {
    return res.status(400).json({ success: false, message: error });
  }
}

export async function searchSongs(req, res) {
  try {
    const searchString = req.query;
    const searchResults = await Music.SearchSongs(searchString);

    return res.status(200).json({ success: true, searchResults });
  } catch (error) {
    return res.status(400).json({ success: false, message: error });
  }
}

export async function searchAlbums(req, res) {
  try {
    const searchString = req.query;
    const searchResults = await Music.SearchAlbums(searchString);

    return res.status(200).json({ success: true, searchResults });
  } catch (error) {
    return res.status(400).json({ success: false, message: error });
  }
}

export async function searchArtists(req, res) {
  try {
    const searchString = req.query;
    const searchResults = await Music.SearchArtists(searchString);

    return res.status(200).json({ success: true, searchResults });
  } catch (error) {
    return res.status(400).json({ success: false, message: error });
  }
}

export async function getAllPlaylists(req, res) {
  try {
    const playlists = await Playlist.GetAllPlaylists();

    return res.json({ success: true, playlists });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
}

export async function getOneArtist(req, res) {
  try {
    const { browseId } = req.query;

    const artist = await Music.GetOneArtist(browseId);

    return res.json({ success: true, artist });
  } catch (error) {
    return res.status(400).json({ success: false, message: error });
  }
}

export async function getMusicVideos(req, res) {
  try {
    const searchString = req.query;
    const searchResults = await Music.GetMusicVideos(searchString);

    return res.json({ success: true, searchResults });
  } catch (error) {
    return res.status(400).json({ success: false, message: err.message });
  }
}
