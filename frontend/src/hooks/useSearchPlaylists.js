import { Fetch, API } from '../helpers/api';
import { useQuery } from 'react-query';

export default function useSearchPlaylists(searchString) {
  return useQuery(['playlists', searchString], () =>
    Fetch.GET(`${API.MUSIC.PLAYLISTS}/search/?searchString=${searchString}`)
  );
}
