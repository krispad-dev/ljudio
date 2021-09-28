import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

// Compontents
import SavedPlayLists from './SavedPlayLists';
import FollowedPlaylists from './FollowedPlayLists';

function PlaylistSection() {
	const [savedPlaylistIsOpen, setSavedPlaylistIsOpen] = useState(true);
	const [followedPlaylistsIsOpen, setFollowedPlaylistsIsOpen] = useState(false);

	function savedPlaylistsOnClickHandler() {
		setFollowedPlaylistsIsOpen(false);
		setSavedPlaylistIsOpen(!savedPlaylistIsOpen);
	}

	function followedPlaylistsOnClickHandler() {
		setSavedPlaylistIsOpen(false);
		setFollowedPlaylistsIsOpen(!followedPlaylistsIsOpen);
	}

	return (
		<PlayListSectionWrapper>
			{!followedPlaylistsIsOpen && (
				<Button
					className='savedPlaylist-btn'
					color='primary'
					endIcon={
						<KeyboardArrowDownIcon
							style={{
								transform: `${savedPlaylistIsOpen ? 'rotate(0)' : 'rotate(-90deg)'}`,
								transition: '0.2s ease-in-out',
							}}
						/>
					}
					onClick={savedPlaylistsOnClickHandler}
				>
					Saved Playlist
				</Button>
			)}

			{savedPlaylistIsOpen && <SavedPlayLists />}

			{!savedPlaylistIsOpen && (
				<Button
					className='followedPlaylists-btn'
					color='primary'
					endIcon={
						<KeyboardArrowDownIcon
							style={{
								transform: `${followedPlaylistsIsOpen ? 'rotate(0)' : 'rotate(-90deg)'}`,
								transition: '0.2s ease-in-out',
							}}
						/>
					}
					onClick={followedPlaylistsOnClickHandler}
				>
					Following
				</Button>
			)}

			{followedPlaylistsIsOpen && <FollowedPlaylists />}
		</PlayListSectionWrapper>
	);
}

const PlayListSectionWrapper = styled.div`

	position: relative;
	z-index: 999;
	height: 85vh;
	width: 100%;
	scrollbar-width: thin;
	scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	.savedPlaylist-btn,
	.followedPlaylists-btn {
		&:hover {
			color: #1dd1a1;
			transition: 0.5s ease-in-out;
		}
		height: 1rem;
		color: #c4c4c4;
		padding: 1rem 0.5;
		margin-top: 0.3rem;
		margin-bottom: 0.3rem;
		font-size: 0.8rem;
		font-weight: 300;
	}

	margin-bottom: 5rem;
	width: 100%;

	overflow: auto;
	/* for Firefox */
	min-height: 0;
`;

export default PlaylistSection;
