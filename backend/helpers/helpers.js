import bcrypt from 'bcrypt';

export const Bcrypt = {
  async hashPassword(password) {
    const salt = 10;
    const hashedPassword = await bcrypt.hash(password, salt);
    return await hashedPassword;
  },

  async comparePassword(password) {
    const comparedPassword = await bcrypt.compare(password, hashedPassword);
    return await comparedPassword;
  },
};
