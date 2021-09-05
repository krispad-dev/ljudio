import express from 'express';
import { searchMusic, searchSongs } from '../controllers/musicControllers.js';

export const musicRouter = express.Router();

musicRouter.get('/', searchMusic);
musicRouter.get('/songs', searchSongs);
