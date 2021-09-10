import { run, all } from '../database/sqLiteFunctions.js';

export const Users = {
  createUser: (newUser) => {
    try {
      const query = `INSERT INTO users(id, userName, email, password) VALUES(:id, :userName, :email, :password)`;
      return run(query, newUser);
    } catch (error) {
      return error;
    }
  },

  doesEmailExist: ({ email }) => {
    try {
      const query = `SELECT * FROM users WHERE email = ?`;

      const emailExist = all(query, email);

      if (emailExist[0]) return false;
      return true;
    } catch (error) {
      return error;
    }
  },

  getUserByEmail: ({ email }) => {
    try {
      const query = `SELECT * FROM users WHERE email = ?`;
      const user = all(query, email);
      return user[0];
    } catch (error) {
      return error;
    }
  },
};
