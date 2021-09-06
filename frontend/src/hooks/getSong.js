export default async function fetchFunction(query) {
  const getFetch = await fetch(
    `https://yt-music-api.herokuapp.com/api/yt/songs/${query}`
  );

  const data = await getFetch.json();

  return data;
}
