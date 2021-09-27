export const durationConverter = duration => {
	const minutes = Math.floor(duration / 60000);
	const seconds = ((duration % 60000) / 1000).toFixed(0);
	return '0' + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
};

export function isInPlaylist(playlistId, arr) {
	if (!playlistId || !arr) {
		return;
	} else {
		return arr.some(playlist => playlist.playlistId === playlistId);
	}
}

export function isInUserPlaylist(playlistId, arr) {
	if (!Array.isArray(arr)) {
		return false;
	} else {
		return arr.some(playlist => playlist.id === playlistId);
	}
}

export function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
  }


