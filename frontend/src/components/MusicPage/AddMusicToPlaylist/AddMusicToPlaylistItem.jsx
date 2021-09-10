import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

function AddMusicToPlaylistItem() {
	return (
		<AddMusicToPlaylistItemWrapper>
			<Button  color='primary'  >ROCK</Button>
		</AddMusicToPlaylistItemWrapper>
	);
}

export default AddMusicToPlaylistItem;

const AddMusicToPlaylistItemWrapper = styled.li`
	display: flex;
	justify-content: center;
	align-items: center;
    background-color: rgba(0,0,0, 0.1);
    padding: 0.5rem;
    &:hover {

        opacity: 60%;
        cursor: pointer;
    }
`;
