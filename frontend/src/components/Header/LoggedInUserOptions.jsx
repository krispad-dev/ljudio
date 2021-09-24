import React from 'react';
import styled from 'styled-components';
import OpenMobileMenuBtn from './OpenMobileMenuBtn';
import { useWindowSize } from '@react-hook/window-size';
import LogOutBtn from '../LogOutBtn';

function LoggedInUserOptions() {
  const [windowWidth, windowHeight] = useWindowSize();

  return (
    <LoggedInUserOptionsWrapper>
      {windowWidth > 1000 && <LogOutBtn />}
      {windowWidth <= 1000 && <OpenMobileMenuBtn />}
    </LoggedInUserOptionsWrapper>
  );
}

export default LoggedInUserOptions;

const LoggedInUserOptionsWrapper = styled.div`
  width: auto;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;
