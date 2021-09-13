import { useQuery } from 'react-query';
import { Fetch, API } from '../helpers/api';

export default function useGetSongs(searchString) {
  //return useQuery(['songs', searchString], () => Fetch.GET(`/api/music/songs/?searchString=${searchString}`));
  return useQuery(['songs', searchString], () => Fetch.GET(`${API.SONGS.ALL}/?searchString=${searchString}`));
}
