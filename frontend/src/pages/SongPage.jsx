import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { playerControllerStateContext } from '../context/YouTubePlayerContext';
import { PLAYER_ACTIONS } from '../reducers/YouTubePlayerReducer';
import MusicPlayBtn from '../components/MusicPlayBtn';
import ShareUrlBtn from '../components/ShareUrlBtn';
import useGetSongs from '../hooks/useGetSongs';
import useGetOneArtist from '../hooks/useGetOneArtist';
import imagePlaceholder from '../assets/na.svg';

function SongPage() {
  const { id } = useParams();
  const [playerState, dispatch] = useContext(playerControllerStateContext);
  const { data } = useGetSongs(id);

  const fallBackDataString = data && data.searchResults && data.searchResults.content && data.searchResults.content[0];

  const songName = fallBackDataString && fallBackDataString.name;
  const artist = fallBackDataString && fallBackDataString.artist && fallBackDataString.artist.name;
  const browseId = fallBackDataString && fallBackDataString.artist && fallBackDataString.artist.browseId;

  const { data: artistData } = useGetOneArtist(browseId);

  const largeImage =
    artistData &&
    artistData.artist &&
    artistData.artist.thumbnails &&
    artistData.artist.thumbnails[0] &&
    artistData.artist.thumbnails[0].url;

  useEffect(() => {
    dispatch({ type: PLAYER_ACTIONS.SET_PENDING_CUE, payload: [id] });
  }, []);

  return (
    <SongPageWrapper>
      <div>
        <h1>{songName}</h1>
        <h2>{artist}</h2>
      </div>

      <div style={{ backgroundImage: `url('${largeImage ? largeImage : imagePlaceholder}')` }} className='img-wrap'>
        <MusicPlayBtn className='play-btn' videoId={id} index={0} />
      </div>
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
    font-size: 2rem;
    font-weight: bold;
  }

  h2 {
    font-size: 1.5rem;
  }

  @media (min-width: 650px) {
    h1 {
      font-size: 4rem;
    }

    h2 {
      font-size: 2.5rem;
    }
  }

  .img-wrap {
    position: relative;
    min-width: 50%;
    min-height: 50%;
    background-size: cover;
    background-position: center center;
  }

  .play-btn {
    font-size: 6rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #1dd1a1;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 10px;
  }
`;
