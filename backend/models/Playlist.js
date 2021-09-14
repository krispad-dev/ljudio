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
  RemovePlaylist: (id) => {
    try {
      const query = `DELETE FROM playlists WHERE id = ?`;
      return run(query, id);
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

  RemoveSongFromPlaylist: (data) => {
    try {
      console.log('MODEL', data);
      const query = `DELETE FROM playlist_song WHERE videoId = ? AND playlistId = ?`;
      return run(query, [data.videoId, data.playlistId]);
    } catch (error) {
      return error;
    }
  },

  GetOneUserPlaylist: (playlistId) => {
    try {
      const query = `SELECT title, playlistId, followCount, GROUP_CONCAT(videoId, ',') 
      AS songs
      FROM playlist_song
      JOIN playlists
      ON playlists.id = playlist_song.playlistId
      WHERE playlists.id = ?`;
      return all(query, playlistId);
    } catch (error) {
      return error;
    }
  },

  GetAllPlaylists: () => {
    try {
      const query = `
        SELECT username, title, playlists.id AS playlistId, followCount 
        FROM playlists
        JOIN users ON playlists.userId = users.id
        ORDER BY followCount DESC
        LIMIT 50
      `;

      return all(query);
    } catch (error) {
      return error;
    }
  },

  FollowPlaylist: (data) => {
    try {
      const query = `
        INSERT INTO followers (userId, playlistId)
        VALUES (:userId, :playlistId)
      `;

      return run(query, data);
    } catch (error) {
      return error;
    }
  },

  UnFollowPlaylist: (data) => {
    try {
      const query = `
       DELETE FROM followers WHERE userId = ? AND playlistId = ?
      `;

      return run(query, [data.userId, data.playlistId]);
    } catch (error) {
      return error;
    }
  },

  GetFollowedPlaylists(data) {
    try {
      const query = `
        SELECT playlists.userId, playlists.id AS playlistId, username, title, followCount
        FROM playlists
        JOIN users
        ON users.id = playlists.userId
        JOIN followers 
        ON followers.playlistId = playlists.id
        WHERE followers.userId = :userId
      `;

      return all(query, data);
    } catch (error) {
      return error;
    }
  },
};
