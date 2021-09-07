import { run, all } from '../database/sqLiteFunctions.js';

export const Users = {
  createUser(newUser) {
    const query = `INSERT INTO users(id, userName, email, password) VALUES(:id, :userName, :email, :password)`;
    return run(query, newUser);
  },

  findUserByEmail({ email }) {
    const query = `SELECT email FROM users WHERE email = ?`;
    const emailExist = all(query, email);

    if (emailExist) return true;
    return false;
  },
};
