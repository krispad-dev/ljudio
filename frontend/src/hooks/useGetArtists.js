import { useQuery } from 'react-query';

async function fetchFunction(query) {

  const getFetch = await fetch(
    `/api/music/artists/?searchString=${query}`
  );

  const data = await getFetch.json();

  if (!getFetch.ok) {
    return { error: 'Error while fetching!' };
  }

  return data;
}

export default function useGetArtists(searchString) {
  return useQuery(['artists', searchString], () => fetchFunction(searchString));
}
