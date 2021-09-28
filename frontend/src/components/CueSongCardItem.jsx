import React from 'react';
import styled from 'styled-components';
import useGetSongs from '../hooks/useGetSongs';
import MusicPlayBtn from './MusicPlayBtn';
import RemoveSongFromPlaylistBtn from './RemoveSongFromPlaylistBtn';
import useGetSavedUserPlaylists from '../hooks/useGetSavedUserPlaylists';
import useAuth from '../hooks/useAuth';
import AddToPlaylistBtn from './AddToPlaylistBtn';

import AddToCueBtn from './AddToCueBtn';
import RemoveFromCueBtn from './RemoveFromCueBtn';
import { useParams, useLocation } from 'react-router-dom';

//HELPER
import { durationConverter, shortenLongStrings } from '../helpers/helpers';
import { isInUserPlaylist } from '../helpers/helpers';

function CueSongCardItem({ song, index, cueId, onDragStart, onDrop }) {
  //VideoID (song-prop) får göra en förfågan till Youtbe-api.

  const { id } = useParams();
  const { data, isLoading } = useGetSongs(song);
  const { data: auth } = useAuth();
  const { pathname } = useLocation();
  const { data: userPlaylists } = useGetSavedUserPlaylists();

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
          draggable={true}
          onDrop={(e) => onDrop(e, index)}
          onDragStart={(e) => onDragStart(e, index)}
          onTouchStart={(e) => onDragStart(e, index)}
        >
          <div className='song-img-container'>
            <img src={thumbnailImg && thumbnailImg} alt='song-cover' />
          </div>

          <div className='song-artist-container'>
            <h2>
              {index + 1}.&nbsp;{songName && shortenLongStrings(songName, 25)}
            </h2>
            <h3>{artistName && artistName}</h3>
          </div>

          <div className='song-duration-container'>
            <h2>Duration</h2>
            <h3>{durationConverter(duration && duration)}</h3>
          </div>
          <div className='song-icon-container'>
            {auth && auth.loggedIn && <AddToPlaylistBtn videoId={song} />}

            {userPlaylists &&
              userPlaylists.userPlaylists &&
              auth.loggedIn &&
              isInUserPlaylist(id, userPlaylists.userPlaylists) && (
                <RemoveSongFromPlaylistBtn videoId={song} playlistId={id} />
              )}

            <MusicPlayBtn
              index={index}
              videoId={song}
              name={songName && songName}
              artist={artistName && artistName}
              thumbnails={thumbnailImg && thumbnailImg}
            />

            {auth && auth.loggedIn && pathname !== '/cue' && <AddToCueBtn videoId={song} cueId={cueId} />}
            {auth && auth.loggedIn && pathname === '/cue' && (
              <RemoveFromCueBtn videoId={song} cueId={cueId} index={index} />
            )}
          </div>
        </div>
      )}
    </PlaylistsCardWrapper>
  );
}

const PlaylistsCardWrapper = styled.div`
  &:hover {
    transition: ease-in-out 0.2s;
    transform: scale(1.01);
    cursor: pointer;
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

  .song-icon-container {
    margin-right: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .song-img-container {
    img {
      border-radius: 2px;
      max-width: 50px;
    }
  }
`;

export default CueSongCardItem;
