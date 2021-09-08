import jwt from 'jsonwebtoken';

export async function verifyToken(req, res, next) {
  try {
    const { authToken } = req.cookies;

    const data = await jwt.verify(authToken, 'sEcReTkEy');
    req.obj = {
      id: data.id,
    };

    console.log('Middleware', data);

    next();
  } catch (err) {
    console.log(err);

    return res.status(403).json({ success: false, message: 'Unauthorized' });
  }
}
