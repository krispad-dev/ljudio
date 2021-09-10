import { useMutation, useQueryClient } from "react-query";

export async function fetchFunction() {

    console.log('hello world');
    const res = await fetch('/api/users/logout/', {
        headers: {
            'Content-Type': 'application/json',
          },
          method: 'PUT',
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
                queryClient.invalidateQueries('auth');
            }

        }

    });

}



