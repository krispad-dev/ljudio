import express from 'express';
import { searchMusic, searchSongs, 
    searchAlbums, searchArtists } from '../controllers/musicControllers.js';
    
import { createUser } from '../controllers/userControllers.js';

export const musicRouter = express.Router();
export const userRouter = express.Router();

musicRouter.get('/', searchMusic);
musicRouter.get('/songs', searchSongs);
musicRouter.get('/artists', searchArtists);
musicRouter.get('/albums', searchAlbums);

userRouter.post('/', createUser);
