import React, { useContext, useEffect } from 'react';
import { UiContext } from '../context/UiState';
import { playerControllerStateContext } from '../context/YouTubePlayerContext';
import { PLAYER_ACTIONS } from '../reducers/YouTubePlayerReducer';
import SongCardItem from '../components/OnePlaylistPage/SongCardItem';
import useGetAllCued from '../hooks/useGetAllCued';
import AddMusicToPlayListList from './AddMusicToPlaylistMenu/AddMusicToPlayListList';
import styled from 'styled-components';



function CueList() {

    const { state } = useContext(UiContext);
    const { data } = useGetAllCued();
    const [ { pendingUserCue }, dispatch ] = useContext(playerControllerStateContext);

    const songs = data?.cue.map(({videoId}) => videoId) || [];

    useEffect(() => {

        dispatch({
            type: PLAYER_ACTIONS.SET_USER_PENDING_CUE,
            payload: songs
        });
        
    }, [data]);

    return (
        <CueListWrapper>
            {state.saveSongToPlaylistSelectorSectionIsOpen && <AddMusicToPlayListList />}
            {data && data.cue.map((song, i) => <SongCardItem key={song.id} song={song.videoId} cueId={song.id} index={i} />)}
        </CueListWrapper>
    );
}

export default CueList;


const CueListWrapper = styled.div`
    width: 100%;
`;