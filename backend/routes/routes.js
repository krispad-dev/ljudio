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
musicRouter.get('/playlists', verifyToken, MusicController.getAllPlaylists);

//Gets all playlists connected to logged in user from databse.
userRouter.get('/playlists/user-playlists', verifyToken, PlaylistController.getAllUserPlaylists);

// Follow playlist
userRouter.post('/playlists/followed-playlists', verifyToken, UserController.followPlaylist);

//Unfollow Playlist
userRouter.delete('/playlists/followed-playlists', verifyToken, UserController.unFollowPlaylist);

// Followed playlists
userRouter.get('/playlists/followed-playlists', verifyToken, UserController.getFollowedPlaylists);

//Gets one playlist from database
userRouter.get('/playlists/user-playlists/1/:id', PlaylistController.getOneUserPlaylist);

//Creates a playlist
userRouter.post('/playlists/user-playlists', verifyToken, PlaylistController.createPlaylist);

//Remove Playlist
userRouter.delete('/playlists/user-playlists', PlaylistController.removePlaylist);

//Saves a song to playlist.
userRouter.post('/playlists/user-playlists/songs', verifyToken, PlaylistController.saveSongToUserPlaylist);

//Remove song from playlist
userRouter.delete('/playlists/user-playlists/songs', verifyToken, PlaylistController.removeSongFromPlaylist);

userRouter.post('/', UserController.createUser);
userRouter.post('/login', UserController.loginUser);
userRouter.put('/logout', UserController.logoutUser);

authRouter.get('/', verifyToken, authCheck);
