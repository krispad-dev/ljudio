import { useQuery } from 'react-query';
import { Fetch, API } from '../helpers/api';

export default function useGetOneSavedUserPlaylist(playlistId) {
  return useQuery(['playlist', playlistId], () => Fetch.GET(`${API.PLAYLIST.ONE_SAVED_USER_PLAYLIST}/${playlistId}`));
}
