import React from 'react';
import logo from '../../assets/logo.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <LogoWrapper>
      <Link to='/'>
        <div className={'circle'}></div>
        <img src={logo} alt='' />
      </Link>
    </LogoWrapper>
  );
}

export default Logo;

const LogoWrapper = styled.div`
margin-left: 0.5rem ;
`;
