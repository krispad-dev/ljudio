import { useQuery } from 'react-query';

async function fetchFunction() {

    const res = await fetch('/api/users/saved-playlists', {
        credentials: 'include'
    });

    const data = await res.json();

    if(!res.ok) {
        return { error: 'Error!' };
    }

    return data;
}


export default function useGetSavedPlaylists() {
    return useQuery(['user-playlists'], fetchFunction);
}