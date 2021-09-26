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
/*     const { data } = useGetAllCued(); */
    const [ { pendingUserCue, activeCue }, dispatch ] = useContext(playerControllerStateContext);

    const [uiSongs, setUiSongs] = useState([]);

/*     const songs = data?.cue.map(({videoId}) => videoId) || []; */

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
    
        console.log('default:', activeCue[defaultEl]);
        console.log('new:', activeCue[newEl]);
        
        const newArr = [ ...activeCue ];
    
        const element = activeCue[newEl];
        newArr.splice(newEl, 1);
        newArr.splice(defaultEl, 0, element);
    
        setUiSongs(newArr);

        dispatch({type: PLAYER_ACTIONS.SET_ACTIVE_CUE, payload: newArr})
    }

/*     useEffect(() => {

        dispatch({
            type: PLAYER_ACTIONS.SET_USER_PENDING_CUE,
            payload: songs
        });
        
    }, [data]); */

/*     useEffect(() => {

        dispatch({type: PLAYER_ACTIONS.SET_ACTIVE_CUE, payload: newArr})
        setUiSongs(songs);
  
    }, [newArr]); */

    return (
        <CueListWrapper onDragOver={(e) => onDragOver(e)}>
            {state.saveSongToPlaylistSelectorSectionIsOpen && <AddMusicToPlayListList />}
            {activeCue.map((song, i) => {
                return <CueSongCardItem 
                        key={i} 
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