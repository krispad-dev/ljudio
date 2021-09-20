import { useMutation, useQueryClient } from 'react-query';
import { Fetch, API } from '../helpers/api.js'


export default function useLoginUser() {
  const queryClient = useQueryClient();
  return useMutation((data) => Fetch.POST(data, API.USER.LOGIN), {
    onSuccess: () => { 
      queryClient.invalidateQueries(['auth']),
      queryClient.invalidateQueries(['followed-playlists']),
      queryClient.invalidateQueries(['user-playlists'])
    }
  });
}
