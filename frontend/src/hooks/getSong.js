import { useQuery } from 'react-query';


async function fetchFunction(str) {
  const res = await fetch('http://localhost:7000/api/music/')
}


export default async function fetchFunction(query) {
  const getFetch = await fetch(
    `https://yt-music-api.herokuapp.com/api/yt/songs/${query}`
  );

  const data = await getFetch.json();

  return data;
}
