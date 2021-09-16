import { useMutation, useQueryClient } from "react-query";
import { Fetch, API } from '../helpers/api.js'

export default function useLogoutUser() {

    const queryClient = useQueryClient();
    
    return useMutation(() => Fetch.PUT({}, API.USER.LOGOUT), {
        onSuccess: (data) => { queryClient.invalidateQueries(['auth']) }
    });

}



