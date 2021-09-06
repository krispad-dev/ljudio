export default async function fetchFunction(query) {
  const getFetch = await fetch(
    `https://yt-music-api.herokuapp.com/api/yt/songs/${query}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  const data = await getFetch.json();

  console.log(data);

  return data;
}
