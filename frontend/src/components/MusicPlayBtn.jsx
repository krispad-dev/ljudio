import React, { useContext } from 'react';
import { IoPlayCircleOutline } from 'react-icons/io5';
import { IoPauseCircleOutline } from 'react-icons/io5';
import styled from 'styled-components';
import { PLAYER_ACTIONS } from '../reducers/YouTubePlayerReducer';
import { playerControllerStateContext } from '../context/YouTubePlayerContext';
import { useLocation } from 'react-router-dom';

function MusicPlayBtn({ videoId, index }) {
  const { pathname } = useLocation();

  const [
    { isPlaying, pauseVideo, playVideo, pendingCue, cuePosition, activeCue },

    dispatchPlayerControllerStateContext,
  ] = useContext(playerControllerStateContext);

  function onClickHandler() {
    dispatchPlayerControllerStateContext({
      type: PLAYER_ACTIONS.SET_ACTIVE_CUE_POSITION,
      payload: pathname !== '/' || activeCue.length < 1 ? index : cuePosition,
    });

    if ((pathname !== '/cue' && pathname !== '/') || activeCue.length < 1) {
      dispatchPlayerControllerStateContext({
        type: PLAYER_ACTIONS.SET_ACTIVE_CUE,
        payload: [...pendingCue],
      });
    } else if (pathname !== '/cue') {
      const filteredActiveCue = [...activeCue].filter((videoIdToRemove) => videoIdToRemove !== videoId);
      const activeCueSpliced = [...filteredActiveCue];
      activeCueSpliced.splice(cuePosition, 0, videoId);

      dispatchPlayerControllerStateContext({ type: PLAYER_ACTIONS.SET_ACTIVE_CUE, payload: activeCueSpliced });
    }
  }

  return (
    <MusicPlayBtnWrapper onClick={onClickHandler}>
      {activeCue[cuePosition] === videoId && isPlaying ? (
        <IoPauseCircleOutline
          className='play-btn'
          onClick={() => pauseVideo()}
          style={
            activeCue[cuePosition] === videoId && isPlaying ? { color: '#1dd1a1', transition: 'ease-in-out 0.2s' } : {}
          }
        />
      ) : (
        <IoPlayCircleOutline
          onClick={() => playVideo()}
          className='play-btn'
          style={
            activeCue[cuePosition] === videoId && isPlaying ? { color: '#1dd1a1', transition: 'ease-in-out 0.2s' } : {}
          }
        />
      )}
    </MusicPlayBtnWrapper>
  );
}

const MusicPlayBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.3rem;

  .play-btn {
    font-size: 2rem;
    color: #c4c4c4;

    &:hover {
      color: #1dd1a1;
      transition: ease-in-out 0.2s;
      cursor: pointer;
    }
  }
`;

export default MusicPlayBtn;
