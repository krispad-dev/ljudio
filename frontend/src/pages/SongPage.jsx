import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { playerControllerStateContext } from '../context/YouTubePlayerContext';
import { PLAYER_ACTIONS } from '../reducers/YouTubePlayerReducer';
import MusicPlayBtn from '../components/MusicPlayBtn';
import ShareUrlBtn from '../components/ShareUrlBtn';
import useGetSongs from '../hooks/useGetSongs';

function SongPage() {
  const { id } = useParams();
  const [playerState, dispatch] = useContext(playerControllerStateContext);

  const { data } = useGetSongs(id);

  data && console.log(data);
  const songName = data && data.searchResults && data.searchResults.content[0].name;
  const artist = data && data.searchResults && data.searchResults.content[0].artist.name;
  const image = data && data.searchResults && data.searchResults.content[0].thumbnails[1].url;

  useEffect(() => {
    dispatch({ type: PLAYER_ACTIONS.SET_PENDING_CUE, payload: [id] });
  }, []);

  return (
    <SongPageWrapper>
      <div>
        <h1>{songName}</h1>
        <h2>{artist}</h2>
      </div>
      <div className='img-wrap'>
        <img src={image} alt='Song Album Cover' />
      </div>
      <MusicPlayBtn className='play-btn' videoId={id} index={0} />
      <ShareUrlBtn />
    </SongPageWrapper>
  );
}

export default SongPage;

const SongPageWrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-items: center;

  h1 {
    font-size: 5rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: bold;
  }

  .play-btn {
    font-size: 6rem;
  }

  .img-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
