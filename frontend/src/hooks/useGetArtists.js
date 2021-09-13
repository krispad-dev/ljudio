import { useQuery } from 'react-query';
import { Fetch, API } from '../helpers/api';

export default function useGetArtists(searchString) {
  //return useQuery(['artists', searchString], () => Fetch.GET(`/api/music/artists/?searchString=${searchString}`));
  return useQuery(['artists', searchString], () => Fetch.GET(`${API.MUSIC.ARTISTS}/?searchString=${searchString}`));
}
