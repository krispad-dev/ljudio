import React, { useContext } from 'react';
import { UiContext } from '../../context/UiState';
import styled from 'styled-components';
import useGetSongs from '../../hooks/useGetSongs';
import MusicPlayBtn from '../MusicPlayBtn';
import RemoveSongFromPlaylistBtn from '../RemoveSongFromPlaylistBtn';
import useGetSavedUserPlaylists from '../../hooks/useGetSavedUserPlaylists';
import useAuth from '../../hooks/useAuth';
import AddMusicToOnePlayListList from './AddMusicToOnePlaylistPage/AddMusicToOnePlayListList';
import AddToPlaylistBtn from '../AddToPlaylistBtn';

//HELPER
import { durationConverter } from '../../helpers/helpers';
import { isInUserPlaylist } from '../../helpers/helpers';

function SongCardItem({ song, playlistId }) {
  //Video ID får göra en förfågan till Youtbe-api.

  const { data } = useGetSongs(song);
  const { data: auth } = useAuth();
  const { state } = useContext(UiContext);

  const { data: userPlaylists } = useGetSavedUserPlaylists();

  return (
    <PlaylistsCardWrapper>
      <div className='song-container'>
        <div className='song-img-container'>
          <img src={data && data.searchResults.content[0].thumbnails[1].url} alt='song-cover' />
        </div>
        <div className='song-artist-container'>
          <h2>{data && data.searchResults.content[0].name}</h2>
          <h3>{data && data.searchResults.content[0].artist.name}</h3>
        </div>

        <div className='song-album-container'>
          <h2>Album</h2>
          <h3>{data && data.searchResults.content[0].album.name}</h3>
        </div>
        <div className='song-duration-container'>
          <h2>Duration</h2>
          <h3>{data && durationConverter(data.searchResults.content[0].duration)}</h3>
        </div>
        <div className='song-icon-container'>
          <MusicPlayBtn
            videoId={song}
            name={data && data.searchResults.content[0].name}
            artist={data && data.searchResults.content[0].artist.name}
            thumbnails={data && data.searchResults.content[0].thumbnails[1].url}
          />
          {userPlaylists && auth.loggedIn && isInUserPlaylist(playlistId, userPlaylists.userPlaylists) && (
            <RemoveSongFromPlaylistBtn videoId={song} playlistId={playlistId} />
          )}
          <div className='test'>
            <AddToPlaylistBtn videoId={song} />
            {state.saveSongToPlaylistSelectorSectionIsOpen && <AddMusicToOnePlayListList />}
          </div>
        </div>
      </div>
    </PlaylistsCardWrapper>
  );
}

const PlaylistsCardWrapper = styled.div`
  width: 100%;

  .song-container {
    margin-top: 10px;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(255, 255, 255, 0.1);
  }

  .song-img-container,
  .song-artist-container,
  .song-album-container,
  .song-duration-container {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .song-icon-container {
    width: 80%;
    display: flex;
  }

  .song-img-container {
    img {
      border-radius: 2px;
    }
  }

  .song-artist-container h2,
  .song-album-container h2,
  .song-duration-container h2 {
    color: c4c4c4;
  }

  .song-artist-container h3,
  .song-album-container h3,
  .song-duration-container h3 {
    font-weight: lighter;
    color: rgba(255, 255, 255, 0.5);
  }
`;

export default SongCardItem;
