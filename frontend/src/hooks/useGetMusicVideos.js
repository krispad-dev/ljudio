import { Fetch, API } from '../helpers/api';
import { useQuery } from 'react-query';

export default function useGetMusicVideos(searchString) {
  return useQuery(['music-videos', searchString], () => Fetch.GET(`${API.MUSIC.VIDEOS}/?searchString=${searchString}`));
}
