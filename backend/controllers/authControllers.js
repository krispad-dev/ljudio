export async function authCheck(req, res) {
  try {
    const user = req.obj;

    res.json({ loggedIn: true, user, message: 'You are loggged in!' });
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
}
