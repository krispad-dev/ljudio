export const durationConverter = (duration) => {
  const minutes = Math.floor(duration / 60000);
  const seconds = ((duration % 60000) / 1000).toFixed(0);
  return (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
};

export const getTime = (time) => {
  return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2);
};

export function isInPlaylist(playlistId, arr) {
  if (!Array.isArray(arr)) {
    return false;
  } else {
    return arr.some((playlist) => playlist.playlistId === playlistId);
  }
}

export function isInUserPlaylist(playlistId, arr) {
  if (!Array.isArray(arr)) {
    return false;
  } else {
    return arr.some((playlist) => playlist.id === playlistId);
  }
}

export function isInCueList(videoId, arr) {
  if (!Array.isArray(arr)) {
    return false;
  } else {
    return arr.some((arrItem) => arrItem === videoId);
  }
}

export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function shortenLongStrings(textString, maxLength = Infinity) {
  return textString.length < maxLength
    ? textString.substring(0, maxLength)
    : textString.substring(0, maxLength) + '...';
}
