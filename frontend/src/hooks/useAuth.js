import { useQuery } from 'react-query';
import { Fetch } from '../helpers/api.js'


export default function useAuth() {
  return useQuery(['auth'], () => Fetch.GET('/api/auth'));
}
