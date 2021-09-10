import { useMutation, useQueryClient } from 'react-query';

async function loginUser(userInfo) {
  const res = await fetch('/api/users/login/', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(userInfo),
    credentials: 'include',
  });

  const data = await res.json();
  console.log(data);

  if (!res.ok) {
    return { error: data.message };
  }
  return data;
}

export default function useLoginUser() {
  const queryClient = useQueryClient();
  return useMutation((data) => loginUser(data), {
    onSuccess: (data) => {
      console.log('from mutation', data);
      if (data.success) {
        queryClient.invalidateQueries('auth', {
          loggedIn: true,
        });
      }
    },
  });
}
