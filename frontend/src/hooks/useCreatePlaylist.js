import { useMutation, useQueryClient } from 'react-query';

async function fetchFunction(dataObj) {
  const res = await fetch('/api/users/playlists/user-playlists', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(dataObj),
  });

  const data = await res.json();

  if (!res.ok) {
    return { error: 'Error!' };
  }

  return data;
}

export default function useCreatePlaylist() {
  const queryClient = useQueryClient();

  return useMutation((data) => fetchFunction(data), {
    onSuccess: () => {
      queryClient.invalidateQueries('user-playlists');
    },
  });
}
