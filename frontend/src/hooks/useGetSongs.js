import { useQuery } from 'react-query';
import { Fetch } from '../helpers/api';

export default function useGetSongs(searchString) {
  return useQuery(['songs', searchString], () => Fetch.GET(`/api/music/songs/?searchString=${searchString}`));
}
