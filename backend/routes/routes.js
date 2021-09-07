import express from 'express';
import { searchMusic, searchSongs } from '../controllers/musicControllers.js';
import { createUser } from '../controllers/userControllers.js';
import { loginUser } from '../controllers/loginControllers.js';

export const musicRouter = express.Router();
export const userRouter = express.Router();
export const loginRouter = express.Router();
export const authRouter = express.Router();

musicRouter.get('/', searchMusic);
musicRouter.get('/songs', searchSongs);

userRouter.post('/', createUser);

loginRouter.post('/', loginUser);
