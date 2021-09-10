import { run, all } from '../database/sqLiteFunctions.js';

export const Playlists = {
  createPlaylist: (playlist) => {
    try {
      const query = `INSERT INTO playlists(id, userId, title) VALUES(:id, :userId, :title)`;
      return run(query, playlist);
    } catch (error) {
      return error;
    }
  },
};
