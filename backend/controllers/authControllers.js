export async function authCheck(req, res) {
  try {
    const user = req.obj;

    return res.json({ loggedIn: true, user, message: 'You are loggged in!' });
  } catch (error) {
    return res.status(400).json({ success: false, message: error });
  }
}
