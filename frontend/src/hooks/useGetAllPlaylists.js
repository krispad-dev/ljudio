import { useQuery } from 'react-query';
import { Fetch, API } from '../helpers/api';

export default function useGetAllPlaylists() {
  return useQuery(['playlists'], () => Fetch.GET(API.MUSIC.PLAYLISTS));
}
