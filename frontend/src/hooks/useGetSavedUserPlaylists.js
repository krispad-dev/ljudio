import { useQuery } from 'react-query';
import { Fetch, API } from '../helpers/api'

export default function useGetSavedUserPlaylists() {
  return useQuery(['user-playlists'], () => Fetch.GET(API.PLAYLIST.ALL_SAVED_USER_PLAYLISTS));
}
