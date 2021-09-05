import { Music } from '../models/Music.js'

export async function searchMusic(req, res) {

	try {
		
		const test = await Music.SearchAll({ searchString: 'hello' })
		

		res.status(200).json({ success: true, test });
	} catch (error) {
		res.status(400).json({ success: false, message: error });
	}
}


export async function searchSong(req, res) {

	try {

		const test = await Music.SearchSongs({ searchString: 'hello' })


		res.status(200).json({ success: true });
	} catch (error) {
		res.status(400).json({ success: false, message: error });
	}
}
