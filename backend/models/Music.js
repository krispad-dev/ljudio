import fetch from 'node-fetch';

export const Music = {
  SearchAll: async ({ searchString } = {}) => {
    try {
      const res = await fetch(`https://yt-music-api.herokuapp.com/api/yt/search/${searchString}`);
      const data = await res.json();
      return data;
    } catch (error) {
      return error;
    }
  },

  SearchSongs: async ({ searchString } = {}) => {
    try {
      const res = await fetch(`https://yt-music-api.herokuapp.com/api/yt/songs/${searchString}`);
      const data = await res.json();
      return data;
    } catch (error) {
      return error;
    }
  },

  SearchArtists: async ({ searchString } = {}) => {
    try {
      const res = await fetch(`https://yt-music-api.herokuapp.com/api/yt/artists/${searchString}`);
      const data = await res.json();
      return data;
    } catch (error) {
      return error;
    }
  },

  SearchAlbums: async ({ searchString } = {}) => {
    try {
      const res = await fetch(`https://yt-music-api.herokuapp.com/api/yt/albums/${searchString}`);
      const data = await res.json();
      return data;
    } catch (error) {
      return error;
    }
  },

  GetOneArtist: async (browseId) => {
    try {
      const res = await fetch(`https://yt-music-api.herokuapp.com/api/yt/artist/${browseId}`);
      const data = await res.json();
      return data;
    } catch (error) {
      return error;
    }
  },

  GetMusicVideos: async ({ searchString }) => {
    try {
      const res = await fetch(`https://yt-music-api.herokuapp.com/api/yt/videos/${searchString}`);
      const data = await res.json();
      return data;
    } catch (error) {
      return error;
    }
  },
};
