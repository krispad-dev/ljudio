import { Music } from '../models/Music.js';


export async function searchMusic(req, res) {
	try {
		const searchString = req.query;
		const searchResults = await Music.SearchAll(searchString);

		res.status(200).json({ success: true, searchResults });
	} catch (error) {
		res.status(400).json({ success: false, message: error });
	}
}

export async function searchSongs(req, res) {
	try {
		const searchString = req.query;
		const searchResults = await Music.SearchSongs(searchString);

		res.status(200).json({ success: true, searchResults });
	} catch (error) {
		res.status(400).json({ success: false, message: error });
	}
}

export async function searchAlbums(req, res) {
	try {
		const searchString = req.query;
		const searchResults = await Music.SearchAlbums(searchString);

		res.status(200).json({ success: true, searchResults });
	} catch (error) {
		res.status(400).json({ success: false, message: error });
	}
}

export async function searchArtists(req, res) {

	try {
		const searchString = req.query;
		const searchResults = await Music.SearchArtists(searchString);

		res.status(200).json({ success: true, searchResults });
	} catch (error) {
		res.status(400).json({ success: false, message: error });
	}
}
