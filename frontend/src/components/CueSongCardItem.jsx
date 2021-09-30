import React from 'react';
import styled from 'styled-components';
import useGetSongs from '../hooks/useGetSongs';
import MusicPlayBtn from './MusicPlayBtn';

import useAuth from '../hooks/useAuth';
import AddToPlaylistBtn from './AddToPlaylistBtn';
import { useWindowSize } from '@react-hook/window-size';

import AddToCueBtn from './AddToCueBtn';

import { useLocation, Link } from 'react-router-dom';

//HELPER
import { durationConverter, shortenLongStrings } from '../helpers/helpers';

function CueSongCardItem({ song, index, cueId, onDragStart, onDrop }) {
  //VideoID (song-prop) får göra en förfågan till Youtbe-api.

  const { data, isLoading } = useGetSongs(song);
  const { data: auth } = useAuth();
  const { pathname } = useLocation();

  const [windowWidth, windowHeight] = useWindowSize();

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
        <div
          className='song-container'
          draggable={windowWidth > 1024}
          onDrop={(e) => onDrop(e, index)}
          onDragStart={(e) => onDragStart(e, index)}
        >
          <div className='song-img-container'>
            <img src={thumbnailImg && thumbnailImg} alt='song-cover' />
            <Link to={`/songs/${song}`}>
              <div className='song-artist-container'>
                <h2>
                  {index + 1}.&nbsp;{songName && shortenLongStrings(songName, 25)}
                </h2>
                <h3>{artistName && artistName}</h3>
              </div>
            </Link>
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

            {auth && auth.loggedIn && pathname !== '/cue' && <AddToCueBtn videoId={song} cueId={cueId} />}

            {auth && auth.loggedIn && <AddToPlaylistBtn index={index} videoId={song} />}
          </div>
        </div>
      )}
    </PlaylistsCardWrapper>
  );
}

const PlaylistsCardWrapper = styled.div`
  &:hover {
    transition: ease-in-out 0.2s;
    transform: scale(1.003);
    cursor: pointer;
    opacity: 0.8;
  }

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

  .song-artist-container:hover {
    h2,
    h3 {
      color: #1dd1a1;
    }
  }
`;

export default CueSongCardItem;
