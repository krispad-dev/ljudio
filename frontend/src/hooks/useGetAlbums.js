import { useQuery } from 'react-query';
import { Fetch, API } from '../helpers/api'


export default function useGetAlbums(searchString) {
  return useQuery(['albums', searchString], () => Fetch.GET(`${API.MUSIC.ALBUMS}/?searchString=${searchString}`));
}
