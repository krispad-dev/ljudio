import { useQueries, useQuery } from 'react-query';
import { Fetch, API } from '../helpers/api';

export default function useGetFollowedPlaylists() {
  return useQuery(['followed-playlists'], () => Fetch.GET(API.PLAYLIST.GET_FOLLOWED_PLAYLISTS));
}
