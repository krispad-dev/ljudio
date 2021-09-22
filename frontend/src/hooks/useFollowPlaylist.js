import { useMutation, useQueryClient } from 'react-query';
import { Fetch, API } from '../helpers/api';

export default function useFollowPlaylist() {
  const queryClient = useQueryClient();

  return useMutation((data) => Fetch.POST(data, API.PLAYLIST.FOLLOW_PLAYLIST), {
    
    onSuccess: () => {
      queryClient.invalidateQueries(['followed-playlists']),
      queryClient.invalidateQueries(['playlist'])
      ;
    },
  });
}
