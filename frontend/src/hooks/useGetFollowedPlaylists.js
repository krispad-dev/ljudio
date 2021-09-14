import { useQueries, useQuery } from 'react-query';
import { Fetch, API } from '../helpers/api';

export default function useGetFollowedPlaylists() {
  return useQuery(['playlists'], () => Fetch.GET(API.PLAYLIST.GET_FOLLOWED_PLAYLISTS));
}
