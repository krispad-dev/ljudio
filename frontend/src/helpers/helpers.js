export function isInPlaylist(arr, playlistId) {
  arr.some((id) => id === playlistId);
}

export const durationConverter = (duration) => {
  const minutes = Math.floor(duration / 60000);
  const seconds = ((duration % 60000) / 1000).toFixed(0);
  return '0' + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
};
