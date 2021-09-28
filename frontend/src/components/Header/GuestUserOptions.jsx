import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function GuestUserOptions() {
  return (
    <GuestUserOptionsWrapper>
      <Link to='/register'>
        <Button variant='outlined' color='primary'>
          REGISTER
        </Button>
      </Link>
      <Link to='/login'>
        <Button variant='outlined' color='primary'>
          LOGIN
        </Button>
      </Link>
    </GuestUserOptionsWrapper>
  );
}

export default GuestUserOptions;

const GuestUserOptionsWrapper = styled.div`
  display: flex;
  margin-left: 0.5rem;

  a {
    margin: 0.2rem;
    color: #1dd1a1;
  }

  @media (max-width: 648px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
