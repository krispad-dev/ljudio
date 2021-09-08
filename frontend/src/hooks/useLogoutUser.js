import { useMutation, useQueryClient } from "react-query";

export async function fetchFunction() {
    const res = await fetch('http://localhost:7000/api/users/logout/', {
      credentials: 'include',
    });
  
    const data = await res.json();
   
    return data;
}


export default function useLogoutUser() {

    const queryClient = useQueryClient();
    
    return useMutation(() => fetchFunction(), {

        onSuccess: (data) => {

            console.log('From logout-mutate', data);

            if(data.success) {
                queryClient.setQueryData('auth', { loggedIn: false });
            }

        }

    });

}



