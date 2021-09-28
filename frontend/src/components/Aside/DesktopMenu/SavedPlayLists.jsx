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

	height: max-content;
	::-webkit-scrollbar {
		display: none;
	}

	margin-bottom: 8rem;
	width: 100%;

	overflow: auto;
	/* for Firefox */
	min-height: 0;
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
`;

export default SavedPlayLists;
