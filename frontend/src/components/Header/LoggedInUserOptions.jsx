import React from 'react';
import styled from 'styled-components';
import OpenMobileMenuBtn from './OpenMobileMenuBtn';
import { useWindowSize } from '@react-hook/window-size';
import LogOutBtn from '../LogOutBtn';

function LoggedInUserOptions() {
  const [windowWidth, windowHeight] = useWindowSize();

  return (
    <LoggedInUserOptionsWrapper>
      {windowWidth > 960 && <LogOutBtn />}
      {windowWidth <= 960 && <OpenMobileMenuBtn />}
    </LoggedInUserOptionsWrapper>
  );
}

export default LoggedInUserOptions;

const LoggedInUserOptionsWrapper = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;
