import React, { useContext } from 'react';
import { MdPlayCircleOutline } from 'react-icons/md';
import styled from 'styled-components';
import { PLAYER_ACTIONS } from '../reducers/YouTubePlayerReducer';
import { playerControllerStateContext } from '../context/YouTubePlayerContext';

function MusicPlayBtn({ videoId, name, artist }) {
  const [{ currentSong, isPlaying }, dispatchPlayerControllerStateContext] = useContext(playerControllerStateContext);

  return (
    <MusicPlayBtnWrapper>
      <MdPlayCircleOutline
        className='play-btn'
        style={currentSong.videoId === videoId && isPlaying ? { color: '#2ecc71', transition: 'ease-in-out 0.2s' } : {}}
        onClick={() =>
          dispatchPlayerControllerStateContext({
            type: PLAYER_ACTIONS.SET_CURRENT_SONG,
            payload: {
              videoId: videoId,
              name: name,
              artist: artist,
            },
          })
        }
      />
    </MusicPlayBtnWrapper>
  );
}

const MusicPlayBtnWrapper = styled.div`
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
