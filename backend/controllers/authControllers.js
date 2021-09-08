export async function authCheck(req, res) {
  console.log('Auth Check', req.obj);

  res.json({ loggedIn: true });
}
