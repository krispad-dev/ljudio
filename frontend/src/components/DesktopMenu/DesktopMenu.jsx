import React from 'react';
import styled from 'styled-components';

//Components
import MenuItems from './MenuItems';
import PlaylistSection from './PlaylistSection';

function DesktopMenu() {
  return (
    <AsideMenuWrapper>
      <MenuItems />
      <details>
        <summary className='summary-playList'>MY PLAYLIST</summary>
        <PlaylistSection />
      </details>
    </AsideMenuWrapper>
  );
}

const AsideMenuWrapper = styled.div`
  .summary-playList {
    color: #c4c4c4;
    font-size: 25px;
  }

  summary {
    color: #c4c4c4;
    font-size: 16px;
    margin-bottom: 10px;
    font-weight: bold;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  p {
    color: #c4c4c4;
    margin: 0;
  }
`;

export default DesktopMenu;
