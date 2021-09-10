import { useQuery } from 'react-query';
import { Fetch } from '../helpers/api';

export default function useGetArtists(searchString) {
  return useQuery(['artists', searchString], () => Fetch.GET(`/api/music/artists/?searchString=${searchString}`));
}
