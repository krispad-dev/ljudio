import React from 'react';
import styled from 'styled-components';
import useGetSongs from '../../hooks/useGetSongs';
import MusicPlayBtn from '../MusicPlayBtn';

import useAuth from '../../hooks/useAuth';
import AddToPlaylistBtn from '../AddToPlaylistBtn';

//HELPER
import { durationConverter, shortenLongStrings } from '../../helpers/helpers';

function SongCardItem({ song, index, cueId }) {
  //VideoID (song-prop) får göra en förfågan till Youtbe-api.

  const { data, isLoading } = useGetSongs(song);
  const { data: auth } = useAuth();

  const fallbackDataString = data && data.searchResults && data.searchResults.content && data.searchResults.content[0];

  const thumbnailImg =
    fallbackDataString &&
    fallbackDataString.thumbnails &&
    fallbackDataString.thumbnails[1] &&
    fallbackDataString.thumbnails[1].url;

  const artistName = fallbackDataString && fallbackDataString.artist && fallbackDataString.artist.name;
  const songName = fallbackDataString && fallbackDataString.name;
  const duration = fallbackDataString && fallbackDataString.duration;

  return (
    <PlaylistsCardWrapper>
      {!isLoading && (
        <div className='song-container'>
          <div className='song-img-container'>
            <img src={thumbnailImg && thumbnailImg} alt='song-cover' />
            <div className='song-artist-container'>
              <h2>{songName && shortenLongStrings(songName, 20)}</h2>
              <h3>{artistName && artistName}</h3>
            </div>
          </div>

          <div className='song-duration-container'>
            <h2>Duration</h2>
            <h3>{durationConverter(duration && duration)}</h3>
          </div>
          <div className='song-icon-container'>
            <MusicPlayBtn
              index={index}
              videoId={song}
              name={songName && songName}
              artist={artistName && artistName}
              thumbnails={thumbnailImg && thumbnailImg}
            />
            {auth && auth.loggedIn && <AddToPlaylistBtn videoId={song} />}
          </div>
        </div>
      )}
    </PlaylistsCardWrapper>
  );
}

const PlaylistsCardWrapper = styled.div`
  .song-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(255, 255, 255, 0.02);
    margin: 0.3rem;
  }

  .song-img-container,
  .song-artist-container,
  .song-album-container,
  .song-duration-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  @media (max-width: 986px) {
    .song-duration-container {
      display: none;
    }
  }

  .song-icon-container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .song-img-container {
    display: flex;
    flex-direction: row;
    img {
      border-radius: 2px;
      max-width: 50px;
      margin-right: 2rem;
    }
  }
`;

export default SongCardItem;
