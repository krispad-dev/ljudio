import { useQuery } from 'react-query';
import { Fetch, API } from '../helpers/api';


export default function useGetAllCued() {
    return useQuery(['cue-list'], () => Fetch.GET(API.CUE.ALL_CUED));
}