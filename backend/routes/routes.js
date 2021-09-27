import express from 'express';
import * as MusicController from '../controllers/musicControllers.js';
import * as UserController from '../controllers/userController.js';
import * as PlaylistController from '../controllers/playlistController.js';
import * as CueController from '../controllers/cueController.js';
import { authCheck } from '../controllers/authControllers.js';
import { verifyToken } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';
import * as ValidationSchema from '../helpers/schema.js';

export const musicRouter = express.Router();
export const userRouter = express.Router();
export const authRouter = express.Router();

musicRouter.get('/', MusicController.searchMusic);
musicRouter.get('/songs', MusicController.searchSongs);
musicRouter.get('/artists', MusicController.searchArtists);
musicRouter.get('/albums', MusicController.searchAlbums);
musicRouter.get('/playlists', verifyToken, PlaylistController.getAllPlaylists);
musicRouter.get('/playlists/search/', verifyToken, PlaylistController.searchPlaylists);
musicRouter.get('/artists/1/', MusicController.getOneArtist);

musicRouter.get('/videos', MusicController.getMusicVideos);

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
userRouter.delete('/playlists/user-playlists', verifyToken, PlaylistController.removePlaylist);

//Update playlist title
userRouter.post('/playlists/user-playlists/title', verifyToken, PlaylistController.updatePlaylistTitle);

//Saves a song to playlist.
userRouter.post('/playlists/user-playlists/songs', verifyToken, PlaylistController.saveSongToUserPlaylist);

//Remove song from playlist
userRouter.delete('/playlists/user-playlists/songs', verifyToken, PlaylistController.removeSongFromPlaylist);

//QUE
userRouter.get('/cue', verifyToken, CueController.getAllFromCue);
userRouter.post('/cue', verifyToken, CueController.addToCue);
userRouter.delete('/cue', verifyToken, CueController.removeFromCue);
userRouter.put('/cue', verifyToken, CueController.updateCue);

//Login, logout, create - user
userRouter.post('/', validate(ValidationSchema.registerSchema), UserController.createUser);
userRouter.post('/login', validate(ValidationSchema.loginSchema), UserController.loginUser);
userRouter.put('/logout', UserController.logoutUser);

authRouter.get('/', verifyToken, authCheck);
