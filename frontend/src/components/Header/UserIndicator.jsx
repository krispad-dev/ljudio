import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import styled from 'styled-components';
import { useWindowSize } from '@react-hook/window-size';
import LogOutBtn from '../LogOutBtn';

function UserIndicator() {
  const { data } = useAuth();
  const [windowWidth] = useWindowSize();

  return (
    <UserIndicatorWrappe>
      <div className='user-info'>
        <FaRegUserCircle style={{ color: '#eee', fontSize: '1rem', marginLeft: '0.2rem' }} />
        <h4>{data && data.user && data.user.userName}</h4>
      </div>
      <div className='logOutBtn-container'>{windowWidth <= 1000 && <LogOutBtn />}</div>
    </UserIndicatorWrappe>
  );
}

export default UserIndicator;

const UserIndicatorWrappe = styled.div`
  background-color: #222;
  font-size: 1rem;
  border-radius: 2px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .user-info {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .logOutBtn-container {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h4 {
    margin: 1rem;
    font-weight: 100;
    text-transform: uppercase;
    letter-spacing: 3px;
  }
`;
