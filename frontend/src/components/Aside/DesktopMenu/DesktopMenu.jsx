import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

//Components
import MenuItems from './MenuItems';
import PlaylistSection from './PlaylistSection';

function DesktopMenu() {
  const [myPlaylistMenuIsOpen, setMyPlaylistMenuIsOpen] = useState(false);

  return (
    <AsideMenuWrapper>
      <MenuItems />
      <Button
        className='myPlaylist-btn'
        onClick={() => setMyPlaylistMenuIsOpen(!myPlaylistMenuIsOpen)}
        color='primary'
        endIcon={<KeyboardArrowDownIcon />}
      >
        MY PLAYLIST
      </Button>
      {myPlaylistMenuIsOpen && <PlaylistSection />}
    </AsideMenuWrapper>
  );
}

const AsideMenuWrapper = styled.div`
  button {
    padding: 0;
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

  .myPlaylist-btn {
    font-size: 1.5rem;
    color: #c4c4c4;
  }
`;

export default DesktopMenu;
