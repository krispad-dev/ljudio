import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function GuestOptions() {
  return (
    <GuestOptionsWrapper>
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
    </GuestOptionsWrapper>
  );
}

export default GuestOptions;

const GuestOptionsWrapper = styled.div`
  a {
    margin: 0.2rem;
  }
`;
