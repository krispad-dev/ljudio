export function isInPlaylist(playlistId, arr) {
    return arr.some((playlist) => playlist.playlistId === playlistId )
  }