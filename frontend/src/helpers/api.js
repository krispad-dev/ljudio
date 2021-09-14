export const Fetch = {
  GET: async (url) => {
    const res = await fetch(url, {
      credentials: 'include',
    });

    console.log('From Fetch' + url);

    const data = await res.json();
    return data;
  },

  POST: async (dataObject, url) => {
    console.log(dataObject);
    const res = await fetch(url, {
      method: 'POST',
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

('/api/users/playlists/user-playlists/songs');

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
    SAVE_SONG_TO_PLAYLIST: `${playlists}/user-playlists/songs`,
    FOLLOW_PLAYLIST: `${playlists}/followed-playlists`,
    GET_FOLLOWED_PLAYLISTS: `${playlists}/followed-playlists`,
  },

  SONGS: {
    ALL: `${songs}`,
  },

  MUSIC: {
    ARTISTS: `${music}/artists`,
    ALBUMS: `${music}/albums`,
    PLAYLISTS: `${music}/playlists`,
  },
};
