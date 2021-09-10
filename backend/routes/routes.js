import express from 'express';
import * as MusicController from '../controllers/musicControllers.js';
import * as UserController from '../controllers/userControllers.js';
import * as PlaylistController from '../controllers/playlistController.js';
import { authCheck } from '../controllers/authControllers.js';
import { verifyToken } from '../middleware/auth.js';

export const musicRouter = express.Router();
export const userRouter = express.Router();
export const authRouter = express.Router();

musicRouter.get('/', MusicController.searchMusic);
musicRouter.get('/songs', MusicController.searchSongs);
musicRouter.get('/artists', MusicController.searchArtists);
musicRouter.get('/albums', MusicController.searchAlbums);

userRouter.post('/', UserController.createUser);
userRouter.post('/playlists/user-playlists', verifyToken, PlaylistController.createPlaylist);
userRouter.post('/login', UserController.loginUser);
userRouter.put('/logout', UserController.logoutUser);

authRouter.get('/', verifyToken, authCheck);
