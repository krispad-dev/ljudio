import React, { useContext, useState } from 'react';

import { UiContext } from '../../context/UiState';

import { UI_STATE_ACTIONS } from '../../reducers/UiReducer';

import { BsPlusCircle } from 'react-icons/bs';

import AddMusicToPlayListList from './AddMusicToPlaylist/AddMusicToPlayListList';
import styled from 'styled-components';
import useAuth from '../../hooks/useAuth';

import MusicPlayBtn from '../MusicPlayBtn';

function SongCard({ videoId, name, artist, thumbnails }) {
  const { data: auth } = useAuth();

  const { state, dispatch } = useContext(UiContext);
  const [addToPlaylistsBoxIsOpen, setAddToPlaylistsBoxIsOpen] = useState(false);

  function selectSongToAddToPlaylistHandler() {
    setAddToPlaylistsBoxIsOpen(!addToPlaylistsBoxIsOpen);
    dispatch({
      type: UI_STATE_ACTIONS.SET_SAVE_SONG_TO_PLAYLIST_SELECTOR_SECTION_IS_OPEN,
    });
    dispatch({
      type: UI_STATE_ACTIONS.SET_SONG_TO_SAVE_TO_USER_PLAYLIST,
      payload: { songToSaveToUserPlaylist: videoId ? videoId : '' },
    });
  }

  return (
    <SongCardWrapper>
      <div className='thumbnail-title-container'>
        <div style={{ backgroundImage: `url(${thumbnails[1].url})` }} className='album-cover'></div>

        <div className='song-info'>
          <h3>{artist.name}</h3>
          <p>{name}</p>
        </div>
      </div>

      {state.saveSongToPlaylistSelectorSectionIsOpen && <AddMusicToPlayListList />}

      <div className='play-symbol-container'>
        {auth && auth.loggedIn && (
          <BsPlusCircle
            style={{
              marginRight: '1rem',
              cursor: 'pointer',
              color: `${
                state.saveSongToPlaylistSelectorSectionIsOpen && videoId === state.songToSaveToUserPlaylist
                  ? '#33408C'
                  : ''
              }`,
            }}
            onClick={selectSongToAddToPlaylistHandler}
          />
        )}
        {/* {auth && auth.loggedIn && <BsHeart />}
         */}
        <MusicPlayBtn videoId={videoId} name={name} artist={artist} />
      </div>
    </SongCardWrapper>
  );
}

export default SongCard;

const SongCardWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  margin: 0.2rem 0rem;
  height: 3rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  .thumbnail-title-container {
    display: flex;
    background-position: center;
    background-size: cover;

    .song-info {
      display: flex;
      flex-direction: column;
      text-align: start;
      align-items: flex-start;
      justify-content: flex-end;
      margin-left: 1rem;
    }
  }

  .album-cover {
    height: 3rem;
    width: 3rem;
    border-radius: 2px;
  }

  .play-symbol-container {
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
`;
