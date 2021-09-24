import React from 'react';
import PlayListCardItem from './PlayListCardItem';
import styled from 'styled-components';
import useGetSavedUserPlaylists from '../../../hooks/useGetSavedUserPlaylists';
import AddPlayListButton from './AddPlayListButton';

function SavedPlayLists() {
	const { data } = useGetSavedUserPlaylists();

	return (
		<SavedPlayListsWrapper>
			<AddPlayListButton />
			{data &&
				data.userPlaylists &&
				data.userPlaylists.length > 0 &&
				data.userPlaylists
					.map(playlist => {
						return <PlayListCardItem playlistId={playlist.id} key={playlist.id} {...playlist} />;
					})
					.reverse()}
			{data && data.userPlaylists && data.userPlaylists.length === 0 && <p>No playlists yet =/</p>}
		</SavedPlayListsWrapper>
	);
}

const SavedPlayListsWrapper = styled.ul`
	animation: dropDown ease-in-out 0.2s;
	@keyframes dropDown {
		from {
			height: 0%;
		}

		to {
			height: 100%;
		}
	}

	height: 100%;
	::-webkit-scrollbar {
		display: none;
	}
	overflow-y: scroll;
	color: #c4c4c4;
	margin-bottom: 10px;
	width: 100%;
`;

export default SavedPlayLists;
