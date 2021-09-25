import { setDB } from '../database/dbConn.js';

const db = setDB('rtawvmwp');

export const Playlist = {
  CreatePlaylist: async (playlist) => {
    try {
      const sql = 'INSERT INTO playlists ("userId", title) VALUES ($1, $2)';
      const values = [playlist.userId, playlist.title];

      await db.query(sql, values);
    } catch (error) {
      return error;
    }
  },

  RemovePlaylist: async (data) => {
    try {
      const sql = 'DELETE FROM playlists WHERE id = $1 AND "userId" = $2';
      await db.query(sql, [data.playlistId, data.userId]);
    } catch (error) {
      return error;
    }
  },

  UpdateUserPlaylistTitle: async (data) => {
    try {
      const sql = 'UPDATE playlists SET title = $1 WHERE id = $2';
      const values = [data.title, data.playlistId];

      await db.query(sql, values);
    } catch (error) {
      return error;
    }
  },

  GetAllUserPlaylists: async (userId) => {
    try {
      const sql = 'SELECT * FROM playlists WHERE "userId" = $1';
      const { rows } = await db.query(sql, [userId]);

      return rows;
    } catch (error) {
      return error;
    }
  },

  checkIfUserOwnsPlaylist: async (data) => {
    try {
      const sql = 'SELECT * FROM playlists WHERE "userId" = $1 AND playlists.id = $2';
      const { rows } = await db.query(sql, [data.userId, data.playlistId]);

      return rows;
    } catch (error) {
      return error;
    }
  },

  SaveSongToPlaylist: async (songInfo) => {
    try {
      const sql = 'INSERT INTO playlist_songs("playlistId", "videoId") VALUES($1, $2)';
      const values = [songInfo.playlistId, songInfo.videoId];

      await db.query(sql, values);
    } catch (error) {
      return error;
    }
  },

  RemoveSongFromPlaylist: async (data) => {
    try {
      const sql = 'DELETE FROM playlist_songs WHERE "videoId" = $1 AND "playlistId" = $2';
      const values = [data.videoId, data.playlistId];

      await db.query(sql, values);
    } catch (error) {
      return error;
    }
  },

  GetOneUserPlaylist: async (playlistId) => {
    try {
      const sql = `
                SELECT title, playlists.id AS id, "followCount", "userName"
                FROM playlists
                JOIN users 
                ON users.id = playlists."userId"
                WHERE playlists.id = $1
            `;

      const sql2 = `
                SELECT STRING_AGG("videoId", ',') 
                AS songs
                FROM playlist_songs 
                WHERE "playlistId" = $1; 
            `;

      const list = await db.query(sql, [playlistId]);
      const songs = await db.query(sql2, [playlistId]);

      let playlist;

      if (songs.rows[0].songs === null) {
        playlist = {
          ...list.rows[0],
          songs: [],
        };

        return playlist;
      }

      playlist = {
        ...list.rows[0],
        songs: songs.rows[0].songs.split(','),
      };

      return playlist;
    } catch (error) {
      return error;
    }
  },

  GetAllPlaylists: async () => {
    try {
      const sql = `
              SELECT "userName", title, playlists.id AS "playlistId", "followCount"
              FROM playlists
              JOIN users 
              ON playlists."userId" = users.id
              ORDER BY "followCount" DESC
              LIMIT 50
            `;

      const { rows } = await db.query(sql);

      return rows;
    } catch (error) {
      return error;
    }
  },

  SearchPlaylists: async (searchString) => {
    try {
      const sql = `SELECT "userName", title, playlists.id AS "playlistId", "followCount"
            FROM playlists
            JOIN users on playlists."userId" = users.id
            WHERE title ILIKE $1
            ORDER BY "followCount" DESC 
            LIMIT 50`;

      const { rows } = await db.query(sql, [`%${searchString}%`]);
      return rows;
    } catch (error) {
      return error;
    }
  },

  FollowPlaylist: async (data) => {
    try {
      const sql = 'INSERT INTO followers ("userId", "playlistId") VALUES ($1, $2)';
      const values = [data.userId, data.playlistId];
      await db.query(sql, values);

      const sql2 = 'UPDATE playlists SET "followCount" = "followCount" + 1 WHERE id = $1';
      await db.query(sql2, [data.playlistId]);
    } catch (error) {
      return error;
    }
  },

  UnFollowPlaylist: async (data) => {
    try {
      const sql = 'DELETE FROM followers WHERE "userId" = $1 AND "playlistId" = $2';
      const sql2 = 'UPDATE playlists SET "followCount" = "followCount" - 1 WHERE id = $1';

      await db.query(sql, [data.userId, data.playlistId]);
      await db.query(sql2, [data.playlistId]);
    } catch (error) {
      return error;
    }
  },

  GetFollowedPlaylists: async (userId) => {
    try {
      const sql = `
              SELECT playlists."userId", playlists.id AS "playlistId", "userName", title, "followCount"
              FROM playlists
              JOIN users
              ON users.id = playlists."userId"
              JOIN followers 
              ON followers."playlistId" = playlists.id
              WHERE followers."userId" = $1
            `;

      const { rows } = await db.query(sql, [userId]);

      return rows;
    } catch (error) {
      return error;
    }
  },
};
