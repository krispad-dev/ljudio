import express from 'express';

import { searchMusic, searchSongs, 
    searchAlbums, searchArtists } from '../controllers/musicControllers.js';

import { createUser, loginUser, logoutUser } from '../controllers/userControllers.js';

import { authCheck } from '../controllers/authControllers.js';
import { verifyToken } from '../middleware/auth.js';

export const musicRouter = express.Router();
export const userRouter = express.Router();
export const authRouter = express.Router();

musicRouter.get('/', searchMusic);
musicRouter.get('/songs', searchSongs);
musicRouter.get('/artists', searchArtists);
musicRouter.get('/albums', searchAlbums);

userRouter.post('/create-user', createUser);
userRouter.post('/login', loginUser);
userRouter.put('/logout', logoutUser);

authRouter.get('/', verifyToken, authCheck);
