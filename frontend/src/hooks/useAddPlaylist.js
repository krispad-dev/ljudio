import { useMutation, useQueryClient } from 'react-query';


async function fetchFunction(data) {
    const res = await fetch('http://localhost:7000/api/?', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        credentials: 'include',
        body: JSON.stringify(data)
    });

    const data = await res.json();

    if(!res.ok) {
        return { error: 'Error!' };
    }

    return data;
}


export default function useAddPlaylist() {

    const queryClient = useQueryClient();

    return useMutation(data => fetchFunction(data), {
        onSuccess: () => {
            queryClient.invalidateQueries('playlists');
        }
    });
}