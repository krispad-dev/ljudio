import React from 'react';
import styled from 'styled-components';
import AddMusicToPlaylistItem from './AddMusicToPlaylistItem';
import useGetSavedUserPlaylists from '../../hooks/useGetSavedUserPlaylists';

function AddMusicToPlayListList() {
	const { data } = useGetSavedUserPlaylists();

	return (
		<AddMusicToPlayListListWrapper>
			{data && data.userPlaylists && data.userPlaylists.map(playlist => <AddMusicToPlaylistItem {...playlist} />)}
		</AddMusicToPlayListListWrapper>
	);
}

export default AddMusicToPlayListList;

const AddMusicToPlayListListWrapper = styled.ul`
	animation: grow ease-in-out 0.1s;

	@keyframes grow {
		from {
			transform: scale(0%);
		}

		to {
			transform: scale(100%);
		}
	}

	width: auto;
	height: auto;
	background-color: rgba(0, 0, 0, 0.6);
	right: 7rem;
	border-radius: 5px;
	z-index: 2000;
  height: 15rem;
  overflow-y: scroll;
	position: absolute;
	padding-left: 10px;
  ::-webkit-scrollbar {
      display: none;
    }
`;