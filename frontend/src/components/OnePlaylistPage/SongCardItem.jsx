import React from 'react';
import styled from 'styled-components';
import useGetSongs from '../../hooks/useGetSongs';
import MusicPlayBtn from '../MusicPlayBtn';

//HELPER
import { durationConverter } from '../../helpers/helpers';

function SongCardItem({ song }) {
  //Video ID får göra en förfågan till Youtbe-api.

  const { data } = useGetSongs(song);

  return (
    <PlaylistsCardWrapper>
      <div className='artist-song-container'>
        <h2>{data && data.searchResults.content[0].name}</h2>
        <h3>{data && data.searchResults.content[0].artist.name}</h3>
      </div>

      <div className='album-container'>
        <h2>Album</h2>
        <h3>{data && data.searchResults.content[0].album.name}</h3>
      </div>

      <div className='duration-container'>
        <h2>Duration</h2>
        <h3>{data && durationConverter(data.searchResults.content[0].duration)}</h3>
      </div>
      <div className='icon-container'>
        <MusicPlayBtn
          videoId={data && data.searchResults.content[0].videoId}
          name={data && data.searchResults.content[0].name}
          artist={data && data.searchResults.content[0].artist.name}
        />
      </div>
    </PlaylistsCardWrapper>
  );
}

const PlaylistsCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .artist-song-container,
  .album-container,
  .duration-container {
    margin: 1rem;
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .artist-song-container h2,
  .album-container h2,
  .duration-container h2 {
    color: c4c4c4;
  }

  .artist-song-container h3,
  .album-container h3,
  .duration-container h3 {
    font-weight: lighter;
    color: rgba(255, 255, 255, 0.5);
  }

  .icon-container {
    width: 100px;
    display: flex;
    justify-content: space-evenly;
  }

  .add-btn,
  .favorite-btn {
    all: unset;
    color: #c4c4c4;
    cursor: pointer;
  }
`;

export default SongCardItem;
