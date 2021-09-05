import { Music } from '../models/Music.js'

export async function searchMusic(req, res) {

	try {

		const searchString = req.query;
 		const searchResults = await Music.SearchAll({ searchString: searchString }) 


		res.status(200).json({ success: true, searchResults });
	} catch (error) {
		res.status(400).json({ success: false, message: error });
	}
}


export async function searchSong(req, res) {

	try {

		const searchString = req.query;
 		const searchResults = await Music.SearchSongs({ searchString: searchString }) 


		res.status(200).json({ success: true, searchResults });
	} catch (error) {
		res.status(400).json({ success: false, message: error });
	}
}