import React from 'react';
import styled from 'styled-components';

//Components
import MenuItems from './MenuItems';
import UserPlayListsSection from './UserPlayListsSection';

function AsideMenu() {
  return (
    <AsideMenuWrapper>
      <MenuItems />
      <UserPlayListsSection />
    </AsideMenuWrapper>
  );
}

const AsideMenuWrapper = styled.div`
  p {
    color: #c4c4c4;
    margin: 0;
  }
`;

export default AsideMenu;
