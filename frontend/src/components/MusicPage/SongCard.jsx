import React, { useContext } from 'react';
import { UiContext } from '../../context/UiState';
import AddMusicToPlayListList from './AddMusicToPlaylist/AddMusicToPlayListList';
import styled from 'styled-components';
import useAuth from '../../hooks/useAuth';

import MusicPlayBtn from '../MusicPlayBtn';
import AddToPlaylistBtn from '../AddToPlaylistBtn';

function SongCard({ videoId, name, artist, thumbnails }) {
  const { data: auth } = useAuth();
  const { state } = useContext(UiContext);

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
        {auth && auth.loggedIn && <AddToPlaylistBtn videoId={videoId} />}
        {/* {auth && auth.loggedIn && <BsHeart />}
         */}
        <MusicPlayBtn videoId={videoId} name={name} artist={artist} thumbnails={thumbnails} />
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
  align-items: center;

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
    margin-right: 0.5rem;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
`;
