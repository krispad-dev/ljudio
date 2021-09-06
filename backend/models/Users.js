import { run } from '../database/sqLiteFunctions.js';

export const Users = {
  createUser(newUser) {
    const query = `INSERT INTO users(id, userName, email, password) VALUES(:id, :userName, :email, :password)`;
    return run(query, newUser);
  },

  findUserByEmail({ email }) {
    const query = `SELECT email FROM users WHERE email = ?`;
    return all(query, email);
  },
};
