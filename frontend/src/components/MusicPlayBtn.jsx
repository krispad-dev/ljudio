import React, { useContext } from 'react';
import { IoPlayCircleOutline } from 'react-icons/io5';
import { IoPauseCircleOutline } from 'react-icons/io5';
import styled from 'styled-components';
import { PLAYER_ACTIONS } from '../reducers/YouTubePlayerReducer';
import { playerControllerStateContext } from '../context/YouTubePlayerContext';

function MusicPlayBtn({ videoId, name, artist, thumbails }) {
  const [{ currentSong, isPlaying, pauseVideo, playVideo }, dispatchPlayerControllerStateContext] =
    useContext(playerControllerStateContext);

  return (
    <MusicPlayBtnWrapper
      onClick={() =>
        dispatchPlayerControllerStateContext({
          type: PLAYER_ACTIONS.SET_CURRENT_SONG,
          payload: {
            videoId: videoId,
            name: name,
            artist: artist,
            tumbnails: thumbails,
          },
        })
      }
    >
      {currentSong.videoId === videoId && isPlaying ? (
        <IoPauseCircleOutline
          className='play-btn'
          onClick={() => pauseVideo()}
          style={
            currentSong.videoId === videoId && isPlaying ? { color: '#2ecc71', transition: 'ease-in-out 0.2s' } : {}
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
