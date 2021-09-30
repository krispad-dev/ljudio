import React, { useContext } from 'react';
import { UiContext } from '../context/UiState';
import { playerControllerStateContext } from '../context/YouTubePlayerContext';
import { PLAYER_ACTIONS } from '../reducers/YouTubePlayerReducer';

import CueSongCardItem from './CueSongCardItem';

import AddMusicToPlayListList from './AddMusicToPlaylistMenu/AddMusicToPlayListList';
import styled from 'styled-components';

import SongListLoader from '../components/Loaders/SongListLoader';

function CueList() {
  const { state } = useContext(UiContext);

  const [{ activeCue }, dispatch] = useContext(playerControllerStateContext);

  function onDragOver(e) {
    e.preventDefault();
  }

  function onDragStart(e, id) {
    e.dataTransfer.setData('text/plain', id);
  }

  function onDrop(e, index) {
    e.preventDefault();
    const defaultEl = index;
    const newEl = e.dataTransfer.getData('text/plain');

    const newArr = [...activeCue];

    const element = activeCue[newEl];
    newArr.splice(newEl, 1);
    newArr.splice(defaultEl, 0, element);

    dispatch({ type: PLAYER_ACTIONS.SET_ACTIVE_CUE, payload: newArr });
  }

  return (
    <CueListWrapper onDragOver={(e) => onDragOver(e)}>
      {state.saveSongToPlaylistSelectorSectionIsOpen && <AddMusicToPlayListList />}
      {!activeCue.length && <h2 className='empty-cue'>No songs in cue...Add some!</h2>}
      {!activeCue && <SongListLoader />}
      {activeCue.map((song, i) => {
        return (
          <CueSongCardItem key={i} song={song} cueId={song.id} index={i} onDragStart={onDragStart} onDrop={onDrop} />
        );
      })}
    </CueListWrapper>
  );
}

export default CueList;

const CueListWrapper = styled.div`
  width: 100%;
  .empty-cue {
    padding: 1rem;
  }
`;
