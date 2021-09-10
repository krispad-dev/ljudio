import { useMutation, useQueryClient } from "react-query";
import { Fetch } from '../helpers/api.js'

export default function useLogoutUser() {

    const queryClient = useQueryClient();
    
    return useMutation(() => Fetch.PUT({}, '/api/users/logout/'), {
        onSuccess: (data) => { queryClient.invalidateQueries('auth') }
    });

}



