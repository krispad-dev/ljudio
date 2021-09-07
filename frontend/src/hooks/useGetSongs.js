import { useQuery } from 'react-query';

async function fetchFunction(query) {
  const getFetch = await fetch(
    `http://localhost:7000/api/music/songs/?searchString=${query}`
  );

  const data = await getFetch.json();

  if (!getFetch.ok) {
    return { error: 'Error while fetching!' };
  }

  return data;
}

export default function useGetSongs(searchString) {
  return useQuery(['songs', searchString], () => fetchFunction(searchString));
}
