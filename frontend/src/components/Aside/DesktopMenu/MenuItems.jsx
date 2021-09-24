import React from 'react';
import Headset from '@material-ui/icons/Headset';
import Video from '@material-ui/icons/MusicVideo';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import styled from 'styled-components';
import MenuItem from './MenuItem';
import UserIndicator from '../../Header/UserIndicator';
import { BiAddToQueue } from 'react-icons/bi';
import { useLocation } from 'react-router-dom';

function MenuItems() {
	const { pathname } = useLocation();

	return (
		<MenuItemsWrapper>
			<MenuItem
				url={'/'}
				icon={<Headset style={{ fontSize: '1.3rem' }} />}
				text={'MUSIC'}
				active={pathname === '/' ? true : false}
			/>
			<MenuItem
				url={'/videos'}
				icon={<Video style={{ fontSize: '1.3rem' }} />}
				text={'VIDEOS'}
				active={pathname === '/videos' ? true : false}
			/>
			<MenuItem
				url={'/playlists'}
				icon={<QueueMusicIcon style={{ fontSize: '1.3rem' }} />}
				text={'PLAYLISTS'}
				active={pathname === '/playlists' ? true : false}
			/>
			<MenuItem
				url={'/cue'}
				icon={<BiAddToQueue style={{ fontSize: '1.3rem' }} />}
				text={'PLAY CUE'}
				active={pathname === '/cue' ? true : false}
			/>

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
