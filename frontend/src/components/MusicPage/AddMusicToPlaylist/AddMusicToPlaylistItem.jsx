import React, { useContext } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import useSaveSongToPlaylist from '../../../hooks/useSaveSongToPlaylist'
import { UiContext } from '../../../context/UiState'
import { UI_STATE_ACTIONS } from '../../../reducers/UiReducer'

function AddMusicToPlaylistItem({ title, id }) {

	const { mutate } = useSaveSongToPlaylist()
	const { state, dispatch } = useContext(UiContext)



	function onClickHandler() {
		setTimeout(() => {
			dispatch({type: UI_STATE_ACTIONS.SET_SAVE_SONG_TO_PLAYLIST_SELECTOR_SECTION_IS_OPEN })
		}, 300);
		mutate({ playlistId: id, videoId: state.songToSaveToUserPlaylist })
	}

	return (
		<AddMusicToPlaylistItemWrapper>
			<Button onClick={onClickHandler} color='primary'>{title}</Button>
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
