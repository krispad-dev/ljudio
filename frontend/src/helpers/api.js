export const Fetch = {
  GET: async (url) => {
    const res = await fetch(url, {
      credentials: 'include',
    });

    const data = await res.json();
    return data;
  },

  POST: async (dataObject, url) => {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(dataObject),
    });

    const data = await res.json();

    if (!res.ok) {
      return { error: data.message };
    }

    return data;
  },

  PUT: async (dataObject, url) => {
    const res = await fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(dataObject),
    });

    const data = await res.json();

    if (!res.ok) {
      return { error: 'Error!' };
    }

    return data;
  },

  DELETE: async (dataObject, url) => {
    const res = await fetch(url, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(dataObject),
    });

    const data = await res.json();

    if (!res.ok) {
      return { error: 'Error!' };
    }

    return data;
  },
};

const users = '/api/users';
const playlists = '/api/users/playlists';
const songs = '/api/music/songs';
const music = '/api/music/';
const cue = '/api/users/cue';

export const API = {
  USER: {
    LOGIN: `${users}/login/`,
    LOGOUT: `${users}/logout/`,
    AUTH: `/api/auth`,
  },

  PLAYLIST: {
    ALL_SAVED_USER_PLAYLISTS: `${playlists}/user-playlists`,
    ONE_SAVED_USER_PLAYLIST: `${playlists}/user-playlists/1`,
    CREATE: `${playlists}/user-playlists`,
    REMOVE_PLAYLIST: `${playlists}/user-playlists`,
    UPDATE_PLAYLIST_TITLE: `${playlists}/user-playlists/title`,
    SAVE_SONG_TO_PLAYLIST: `${playlists}/user-playlists/songs`,
    REMOVE_SONG_FROM_PLAYLIST: `${playlists}/user-playlists/songs`,
    FOLLOW_PLAYLIST: `${playlists}/followed-playlists`,
    GET_FOLLOWED_PLAYLISTS: `${playlists}/followed-playlists`,
    UNFOLLOW_PLAYLIST: `${playlists}/followed-playlists`,
  },

  SONGS: {
    ALL: `${songs}`,
  },

  MUSIC: {
    ARTISTS: `${music}/artists`,
    ONE_ARTIST: `${music}/artists/1/`,
    ALBUMS: `${music}/albums`,
    PLAYLISTS: `${music}/playlists`,
    VIDEOS: `${music}/videos`,
  },

  CUE: {
    ALL_CUED: `${cue}`,
    ADD_TO_CUE: `${cue}`,
    REMOVE_FROM_CUE: `${cue}`,
  }
};
