import { useMutation, useQueryClient } from 'react-query';
import { Fetch } from '../helpers/api';

export default function useSaveSongToPlaylist() {

  const queryClient = useQueryClient();

  return useMutation(data => Fetch.POST(data, '/api/users/playlists/user-playlists/songs'), {
      onSuccess: queryClient.invalidateQueries(['songsSavedInUserPlaylists'])
    })
}
