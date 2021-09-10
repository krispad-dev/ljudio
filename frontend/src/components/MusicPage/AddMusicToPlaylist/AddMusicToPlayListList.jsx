import React from 'react';
import styled from 'styled-components';
import AddMusicToPlaylistItem from './AddMusicToPlaylistItem';

function AddMusicToPlayListList() {
	return (
		<AddMusicToPlayListListWrapper>
			<AddMusicToPlaylistItem />
			<AddMusicToPlaylistItem />
			<AddMusicToPlaylistItem />
			<AddMusicToPlaylistItem />
		</AddMusicToPlayListListWrapper>
	);
}

export default AddMusicToPlayListList;

const AddMusicToPlayListListWrapper = styled.ul`

	animation: grow ease-in-out 0.1s ;

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
	position: absolute;
	right: 7rem;
	top: 7rem;
	border-radius: 5px;
`;