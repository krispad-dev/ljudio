import { setDB } from '../database/dbConn.js';

const db = setDB('rtawvmwp');

export const User = {
  CreateUser: async (newUser) => {
    try {
      const sql = 'INSERT INTO users ("userName", email, password) VALUES ($1, $2, $3)';
      const values = [newUser.userName, newUser.email, newUser.password];

      await db.query(sql, values);
    } catch (error) {
      return error;
    }
  },

  GetUserByEmail: async (email) => {
    try {
      const sql = 'SELECT * FROM users WHERE email = $1';

      const { rows, rowCount } = await db.query(sql, [email]);

      if (rowCount > 0) {
        return rows[0];
      } else {
        return false;
      }
    } catch (error) {
      return error;
    }
  },
};
