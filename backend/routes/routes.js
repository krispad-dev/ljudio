import express from 'express';
import { searchMusic, searchSongs } from '../controllers/musicControllers.js';
import { createUser } from '../controllers/userControllers.js';

export const musicRouter = express.Router();
export const userRouter = express.Router();

musicRouter.get('/', searchMusic);
musicRouter.get('/songs', searchSongs);

userRouter.post('/', createUser);
