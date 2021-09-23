import { setDB } from '../database/dbConn.js';
const db = setDB('rtawvmwp');

export const Cue = {
  GetAllFromCue: async (userId) => {
    try {
      const sql = `SELECT * FROM cue_songs WHERE "userId" = $1`;
      const { rows } = await db.query(sql, [userId]);
      return rows;
    } catch (error) {
      return error;
    }
  },
  AddToCue: async (data) => {
    try {
      const sql = `INSERT INTO cue_songs("userId", "videoId") VALUES($1, $2)`;
      const values = [data.userId, data.videoId];
      await db.query(sql, values);
    } catch (error) {
      return error;
    }
  },
  RemoveFromCue: async (data) => {
    try {
      const sql = `DELETE FROM cue_songs WHERE id = $1 AND "userId" = $2`;
      const values = [data.cueId, data.userId];
      await db.query(sql, values);
    } catch (error) {
      return error;
    }
  },
};
