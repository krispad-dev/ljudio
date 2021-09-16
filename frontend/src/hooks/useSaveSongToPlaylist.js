import { useMutation, useQueryClient } from 'react-query';
import { Fetch, API } from '../helpers/api';

export default function useSaveSongToPlaylist() {
  const queryClient = useQueryClient();

  return useMutation((data) => Fetch.POST(data, API.PLAYLIST.SAVE_SONG_TO_PLAYLIST), {
    onSuccess: () => {
      queryClient.invalidateQueries(['playlist']);
      queryClient.invalidateQueries(['playlists']);
      queryClient.invalidateQueries(['followed-playlists']);
      queryClient.invalidateQueries(['user-playlists']);
    }
  });
}
