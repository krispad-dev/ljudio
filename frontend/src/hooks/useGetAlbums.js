import { useQuery } from 'react-query';
import { Fetch } from '../helpers/api'


export default function useGetAlbums(searchString) {
  return useQuery(['albums', searchString], () => Fetch.GET(`/api/music/albums/?searchString=${searchString}`));
}
