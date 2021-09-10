import { useMutation, useQueryClient } from 'react-query';
import { Fetch } from '../helpers/api.js'


export default function useLoginUser() {
  const queryClient = useQueryClient();
  return useMutation((data) => Fetch.POST(data, '/api/users/login/'), {
    onSuccess: () => { queryClient.invalidateQueries('auth')}

  });
}
