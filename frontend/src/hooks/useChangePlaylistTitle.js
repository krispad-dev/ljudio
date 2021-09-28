import { useMutation, useQueryClient } from 'react-query';
import { Fetch, API } from '../helpers/api';

export default function useChangePlaylistTitle() {
    const queryClient = useQueryClient();
    return useMutation(data => Fetch.POST(data, API.PLAYLIST.UPDATE_PLAYLIST_TITLE), {
        onSuccess: () => {
            queryClient.invalidateQueries(['playlist']);
            queryClient.invalidateQueries(['user-playlists']);
        }
    });
}