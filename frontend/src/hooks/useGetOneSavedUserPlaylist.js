import { useQuery } from 'react-query';
import { Fetch, API } from '../helpers/api';

export default function useGetOneSavedUserPlaylist(playlistId) {
  console.log('From Hook' + playlistId);
  return useQuery(['playlist'], () => Fetch.GET(`${API.PLAYLIST.ONE_SAVED_USER_PLAYLIST}/${playlistId}`));
}
