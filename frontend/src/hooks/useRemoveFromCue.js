import { useMutation, useQueryClient } from 'react-query';
import { Fetch, API } from '../helpers/api';


export default function useRemoveFromCue() {

    const queryClient = useQueryClient();

    return useMutation(data => Fetch.DELETE(data, API.CUE.REMOVE_FROM_CUE), {
        onSuccess: () => {
            queryClient.invalidateQueries(['cue-list']);
        }
    });
}