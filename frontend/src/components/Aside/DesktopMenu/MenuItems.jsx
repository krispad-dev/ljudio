import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import AddBoxIcon from '@material-ui/icons/AddBox';
import styled from 'styled-components';
import MenuItem from './MenuItem';

function MenuItems() {
  return (
    <MenuItemsWrapper>
      <MenuItem url={'/'} icon={<HomeIcon />} text={'HOME'} />
      <MenuItem url={'/'} icon={<LibraryMusicIcon />} text={'MUSIC'} />
      <MenuItem url={'/playlists'} icon={<AddBoxIcon />} text={'PLAYLISTS'} />
      <div className='divider'></div>
    </MenuItemsWrapper>
  );
}

const MenuItemsWrapper = styled.div`
  height: 10rem;
  margin-bottom: 10px;
  .divider {
    border-top: 1px solid #8c8b8b;
  }
  h1 {
    font-size: 1.5rem;
    font-family: 'Roboto', sans-serif;
  }
`;

export default MenuItems;
