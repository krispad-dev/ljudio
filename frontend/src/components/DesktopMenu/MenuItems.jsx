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
      <MenuItem url={'/'} icon={<AddBoxIcon />} text={'PLAYLISTS'} />
      <div className='divider'></div>
    </MenuItemsWrapper>
  );
}

const MenuItemsWrapper = styled.div`
  .divider {
    border-top: 1px solid #8c8b8b;
  }
`;

export default MenuItems;
