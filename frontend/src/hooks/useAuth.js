import { useQuery } from 'react-query';
import { Fetch, API } from '../helpers/api.js'


export default function useAuth() {
  //return useQuery(['auth'], () => Fetch.GET('/api/auth'));
  return useQuery(['auth'], () => Fetch.GET(API.USER.AUTH));
}
