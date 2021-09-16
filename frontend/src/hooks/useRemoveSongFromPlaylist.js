import { useMutation, useQueryClient } from 'react-query';
import { API, Fetch } from '../helpers/api';

export default function useRemoveSongFromPlaylist() {
  const queryClient = useQueryClient();

  return useMutation((data) => Fetch.DELETE(data, API.PLAYLIST.REMOVE_SONG_FROM_PLAYLIST), {
    onSuccess: () => {
      queryClient.invalidateQueries(['playlists']);
      queryClient.invalidateQueries(['playlist']);
      queryClient.invalidateQueries(['user-playlists'])
      queryClient.invalidateQueries(['followed-playlists'])

    }
  });
}
