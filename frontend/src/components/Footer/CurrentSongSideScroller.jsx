import React, { useContext } from 'react';
import { playerControllerStateContext } from '../../context/YouTubePlayerContext';
import styled from 'styled-components';
import Marquee from 'react-fast-marquee';
import useGetSongs from '../../hooks/useGetSongs';

function CurrentSongSideScroller() {
  const [{ currentSong, activeCue, cuePosition, isPlaying }, dispatch] = useContext(playerControllerStateContext);

  const { data } = useGetSongs(activeCue && activeCue[cuePosition]);
  const currentSongInfo = data && data.searchResults && data.searchResults.content[0];
  currentSongInfo && currentSongInfo.name && currentSongInfo.name

  const activeCueIsEmpty = activeCue && activeCue.length > 0;



  return (
    <CurrentSongDisplayerWrapper style={{ visibility: `${activeCueIsEmpty ? 'visible' : 'hidden'}` }}>
      <Marquee gradient={false}>
        <h4>
          <strong>{currentSongInfo && currentSongInfo.name}</strong>
        </h4>
        {currentSong && <p>&nbsp;&nbsp;///&nbsp;&nbsp;</p>}
        <p>&nbsp;{currentSongInfo && currentSongInfo.artist.name}</p>
      </Marquee>
    </CurrentSongDisplayerWrapper>
  );
}

export default CurrentSongSideScroller;

const CurrentSongDisplayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  color: #fff;
  font-weight: 200;

  h4 {
    margin: rem;
  }
`;
