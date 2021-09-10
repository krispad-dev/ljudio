import { useQuery } from 'react-query';
import { Fetch } from '../helpers/api';


export default function useGetSavedPlaylists() {
    return useQuery(['user-playlists'], Fetch.GET('/api/users/saved-playlists'));
}