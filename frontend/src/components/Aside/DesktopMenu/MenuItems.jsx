import React from 'react';
import Headset from '@material-ui/icons/Headset';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import styled from 'styled-components';
import MenuItem from './MenuItem';
import UserIndicator from '../../Header/UserIndicator';

function MenuItems() {
	return (
		<MenuItemsWrapper>
			<MenuItem url={'/'} icon={<Headset style={{ fontSize: '1.3rem' }}   />} text={'MUSIC'} />
			<MenuItem url={'/playlists'} icon={<QueueMusicIcon style={{ fontSize: '1.3rem' }} />} text={'PLAYLISTS'} />

			<div className='divider'></div>
      <UserIndicator />
		</MenuItemsWrapper>
	);
}

const MenuItemsWrapper = styled.div`
	height: auto;
	margin-bottom: 10px;
	.divider {
	}
	h1 {
		font-size: 1rem;
		font-family: 'Roboto', sans-serif;
	}
`;

export default MenuItems;
