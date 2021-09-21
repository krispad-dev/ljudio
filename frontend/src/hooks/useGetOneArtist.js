import { useQuery } from 'react-query';
import { Fetch, API } from '../helpers/api';

export default function useGetOneArtist(browseId) {
  return useQuery(['artist'], () => Fetch.GET(`${API.MUSIC.ONE_ARTIST}/?browseId=${browseId}`));
}