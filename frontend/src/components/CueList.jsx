import React, { useContext, useState, useEffect } from 'react';
import { UiContext } from '../context/UiState';
import { playerControllerStateContext } from '../context/YouTubePlayerContext';
import { PLAYER_ACTIONS } from '../reducers/YouTubePlayerReducer';
import SongCardItem from '../components/OnePlaylistPage/SongCardItem';
import CueSongCardItem from './CueSongCardItem';
import useGetAllCued from '../hooks/useGetAllCued';
import AddMusicToPlayListList from './AddMusicToPlaylistMenu/AddMusicToPlayListList';
import styled from 'styled-components';



function CueList() {

    const { state } = useContext(UiContext);
    const { data } = useGetAllCued();
    const [ { pendingUserCue }, dispatch ] = useContext(playerControllerStateContext);

    const [uiSongs, setUiSongs] = useState([]);

    const songs = data?.cue.map(({videoId}) => videoId) || [];

    function onDragOver(e) {
        e.preventDefault();
    }
    
    function onDrop(e) {
        const data = e.dataTransfer.getData('text/plain');
        console.log(data);
        console.log('Dropped!');
    }
    
    function onDragStart(e, id) {
        console.log(id);
        e.dataTransfer.setData('text/plain', id);
    }
    
    function testDrop(e, index) {
        const defaultEl = index;
        const newEl = e.dataTransfer.getData('text/plain');
    
        console.log('default:', uiSongs[defaultEl]);
        console.log('new:', uiSongs[newEl]);
        
        const newArr = [ ...uiSongs ];
    
        const element = uiSongs[newEl];
        newArr.splice(newEl, 1);
        newArr.splice(defaultEl, 0, element);
    
        setUiSongs(newArr);
    }

    useEffect(() => {

        dispatch({
            type: PLAYER_ACTIONS.SET_USER_PENDING_CUE,
            payload: songs
        });
        
    }, [data]);

    useEffect(() => {

        if(data) {
          setUiSongs(songs);
        }
    
    }, [data]);

    return (
        <CueListWrapper onDragOver={(e) => onDragOver(e)}>
            {state.saveSongToPlaylistSelectorSectionIsOpen && <AddMusicToPlayListList />}
            {uiSongs.map((song, i) => {
                return <CueSongCardItem 
                        key={song} 
                        song={song} 
                        cueId={song.id} 
                        index={i} 
                        onDragStart={onDragStart}
                        onDrop={testDrop}
                        />
            })}
        </CueListWrapper>
    );
}

export default CueList;


const CueListWrapper = styled.div`
    width: 100%;
`;