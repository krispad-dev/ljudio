import { useMutation, useQueryClient } from 'react-query';
import { Fetch, API } from '../helpers/api';


export default function useAddToCue() {

    const queryClient = useQueryClient();

    return useMutation(data => Fetch.POST(data, API.CUE.ADD_TO_CUE), {
        onSuccess: () => {
            queryClient.invalidateQueries(['cue-list']);
        }
    });
}