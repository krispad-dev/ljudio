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
	if (!playlistId || !arr) {
		return;
	} else {
		return arr.some(playlist => playlist.id === playlistId);
	}
}

export function shuffle(array) {
	let currentIndex = array.length,  randomIndex;
  
	// While there remain elements to shuffle...
	while (currentIndex != 0) {
  
	  // Pick a remaining element...
	  randomIndex = Math.floor(Math.random() * currentIndex);
	  currentIndex--;
  
	  // And swap it with the current element.
	  [array[currentIndex], array[randomIndex]] = [
		array[randomIndex], array[currentIndex]];
	}
  
	return array;
  }
