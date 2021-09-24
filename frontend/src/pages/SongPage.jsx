import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { playerControllerStateContext } from '../context/YouTubePlayerContext';
import { PLAYER_ACTIONS } from '../reducers/YouTubePlayerReducer';
import MusicPlayBtn from '../components/MusicPlayBtn';
import ShareUrlBtn from '../components/ShareUrlBtn';
import useGetSongs from '../hooks/useGetSongs';
import useGetOneArtist from '../hooks/useGetOneArtist';

function SongPage() {
  const { id } = useParams();
  const [playerState, dispatch] = useContext(playerControllerStateContext);
  const { data } = useGetSongs(id);

  data && console.log(data);

  const fallBackDataString = data && data.searchResults && data.searchResults.content && data.searchResults.content[0];

  const songName = fallBackDataString && fallBackDataString.name;
  const artist = fallBackDataString && fallBackDataString.artist && fallBackDataString.artist.name;
  const image =
    fallBackDataString &&
    fallBackDataString.thumbnails &&
    fallBackDataString.thumbnails[1] &&
    fallBackDataString.thumbnails[1].url;
  const browseId = fallBackDataString && fallBackDataString.artist && fallBackDataString.artist.browseId;

  const { data: artistData } = useGetOneArtist(browseId);
  console.log(artistData);

  const largeImage =
    artistData &&
    artistData.artist &&
    artistData.artist.thumbnails &&
    artistData.artist.thumbnails[0] &&
    artistData.artist.thumbnails[0].url;
  console.log(largeImage);

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
        <img src={largeImage} alt='Song Album Cover' />
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

  /* z-index: 99999; */

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    width: 100%;
    max-width: 500px;
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
