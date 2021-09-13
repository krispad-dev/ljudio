import { useMutation, useQueryClient } from 'react-query';
import { Fetch } from '../helpers/api.js';

export default function useCreatePlaylist() {
	const queryClient = useQueryClient();

	return useMutation(data => Fetch.POST(data, '/api/users/playlists/user-playlists'), {
		onSuccess: () => {
			queryClient.invalidateQueries('user-playlists');
		},
	});
}
