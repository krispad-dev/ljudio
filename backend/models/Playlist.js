import { run, all } from '../database/sqLiteFunctions.js';

export const Playlists = {
  CreatePlaylist: (playlist) => {
    try {
      const query = `INSERT INTO playlists(id, userId, title) VALUES(:id, :userId, :title)`;
      return run(query, playlist);
    } catch (error) {
      return error;
    }
  },

  GetAllUserPlaylists: (userId) => {
    try {
      console.log(userId);
      const query = `SELECT * FROM playlists WHERE userId = ?`;
      return all(query, userId);
    } catch (error) {
      return error;
    }
  },

  SaveSongToPlaylist: (songInfo) => {
    try {
      const query = `INSERT INTO playlist_song(id, playlistId, videoId) VALUES(:id, :playlistId, :videoId)`;
      return run(query, songInfo);
    } catch (error) {
      return error;
    }
  },
};
