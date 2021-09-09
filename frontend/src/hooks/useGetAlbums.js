import { useQuery } from 'react-query';

async function fetchFunction(query) {
  const getFetch = await fetch(
    `http://localhost:7000/api/music/albums/?searchString=${query}`
  );

  const data = await getFetch.json();

  if (!getFetch.ok) {
    return { error: 'Error while fetching!' };
  }

  return data;
}

export default function useGetAlbums(searchString) {
  return useQuery(['albums', searchString], () => fetchFunction(searchString));
}
