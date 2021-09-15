import { useMutation, useQueryClient } from 'react-query';
import { Fetch, API } from '../helpers/api.js';


export default function useCreatePlaylist() {
	const queryClient = useQueryClient();

	return useMutation(data => Fetch.POST(data, API.PLAYLIST.CREATE), {
		onSuccess: () => {
			queryClient.invalidateQueries(['playlists']),
			queryClient.invalidateQueries(['user-playlists']);
		},
	});
}
