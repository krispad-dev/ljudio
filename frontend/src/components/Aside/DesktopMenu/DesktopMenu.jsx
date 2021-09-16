import React, { useState } from 'react';
import styled from 'styled-components';

//Components
import MenuItems from './MenuItems';
import PlaylistSection from './PlaylistSection';
import LogOutBtn from '../../LogOutBtn';
import { useWindowSize } from '@react-hook/window-size';

function DesktopMenu() {
	const [windowWidth, windowHeight] = useWindowSize();

	return (
		<AsideMenuWrapper>
			<MenuItems />
			<h1 className='myPlaylist-h1'>MY PLAYLISTS</h1>
			<PlaylistSection />
			{windowWidth < 980 && (
				<div className='logout-btn-container'>
					<LogOutBtn />
				</div>
			)}
		</AsideMenuWrapper>
	);
}

const AsideMenuWrapper = styled.div`
	.logout-btn-container {
		margin-left: 1rem;
		margin-top: 1rem;
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

	.myPlaylist-h1 {
		margin-left: 1rem;
		margin-bottom: 1.2rem;
		font-size: 1.5rem;
		color: #c4c4c4;
		cursor: default;
	}
`;

export default DesktopMenu;
