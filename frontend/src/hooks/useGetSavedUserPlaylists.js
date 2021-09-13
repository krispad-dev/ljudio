import { useQuery } from 'react-query';
import { Fetch } from '../helpers/api'

export default function useGetSavedUserPlaylists() {
  return useQuery(['user-playlists'], () => Fetch.GET('/api/users/playlists/user-playlists'));
}
