import { useMutation, useQueryClient } from 'react-query';
import { API, Fetch } from '../helpers/api';

export default function useUnfollowPlaylist() {
  const queryClient = useQueryClient();

  return useMutation((data) => Fetch.DELETE(data, API.PLAYLIST.REMOVE_PLAYLIST), {
    onSuccess: () => {
      queryClient.invalidateQueries('playlists');
    }
  });
}
