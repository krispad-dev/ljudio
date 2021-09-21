import React, { useContext } from 'react';
import { IoPlayCircleOutline } from 'react-icons/io5';
import { IoPauseCircleOutline } from 'react-icons/io5';
import styled from 'styled-components';
import { PLAYER_ACTIONS } from '../reducers/YouTubePlayerReducer';
import { playerControllerStateContext } from '../context/YouTubePlayerContext';

function MusicPlayBtn({ videoId, name, artist, thumbails, index }) {
  const [{ currentSong, isPlaying, 
    pauseVideo, playVideo, pendingCue, cuePosition, activeCue }, dispatchPlayerControllerStateContext] = useContext(playerControllerStateContext);

  function onClickHandler(){

    dispatchPlayerControllerStateContext({
      type: PLAYER_ACTIONS.SET_ACTIVE_CUE_POSITION,
      payload: index,
  
    })

    dispatchPlayerControllerStateContext({
      type: PLAYER_ACTIONS.SET_ACTIVE_CUE,
      payload: pendingCue,
    })
  }

  return (
    <MusicPlayBtnWrapper onClick={onClickHandler} >
      {activeCue[cuePosition] === videoId && isPlaying ? (
        <IoPauseCircleOutline
          className='play-btn'
          onClick={() => pauseVideo()}
          style={
            activeCue[cuePosition] === videoId && isPlaying ? { color: '#2ecc71', transition: 'ease-in-out 0.2s' } : {}
          }
        />
      ) : (
        <IoPlayCircleOutline onClick={() => playVideo()} className='play-btn' />
      )}
    </MusicPlayBtnWrapper>
  );
}

const MusicPlayBtnWrapper = styled.div`
  display: flex;
  justify-content: center;

  .play-btn {
    font-size: 1.5rem;
    color: #c4c4c4;

    &:hover {
      color: #2ecc71;
      transition: ease-in-out 0.2s;
      cursor: pointer;
    }
  }
`;

export default MusicPlayBtn;
