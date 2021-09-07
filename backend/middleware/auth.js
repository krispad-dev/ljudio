import jwt from 'jsonwebtoken';

export async function verifyToken(req, res, next) {
  try {
    const { authToken } = req.cookies;

    await jwt.verify(authToken, 'sEcReTkEy');

    next();
  } catch (err) {
    console.log(err);

    return res.status(403).json({ success: false, message: 'Unauthorized' });
  }
}
