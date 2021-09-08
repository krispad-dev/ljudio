import React from 'react';
import useLogoutUser from '../hooks/useLogoutUser';
import { useHistory } from 'react-router-dom';
import { fetchFunction } from '../hooks/useLogoutUser';


function Test() {

  const { push } = useHistory();

  function logout() {
    if(window.confirm('Logout?')) {
        fetchFunction();
        push('/');
    }
  }

  return (
    <div style={{ display: 'flex' }}>
      <button onClick={() => logout()}>Logout</button>
      <h1>You are already logged in!</h1>
    </div>
  );
}

export default Test;
