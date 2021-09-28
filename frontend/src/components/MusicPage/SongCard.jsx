import React, { useContext } from 'react';
import { UiContext } from '../../context/UiState';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useAuth from '../../hooks/useAuth';

import MusicPlayBtn from '../MusicPlayBtn';
import AddToPlaylistBtn from '../AddToPlaylistBtn';
import { shortenLongStrings } from '../../helpers/helpers';

function SongCard({ videoId, name, artist, thumbnails, index }) {
  const { data: auth } = useAuth();

  return (
    <SongCardWrapper>
      <div className='thumbnail-title-container'>
        <div style={{ backgroundImage: `url(${thumbnails[1].url})` }} className='album-cover'></div>
        <Link to={`/songs/${videoId}`}>
          <div className='song-info'>
            <h3>{artist.name}</h3>
            <p>{shortenLongStrings(name, 20)}</p>
          </div>
        </Link>
      </div>

      <div className='play-symbol-container'>
        <MusicPlayBtn index={index} videoId={videoId} name={name} artist={artist} thumbnails={thumbnails} />
        {auth && auth.loggedIn && <AddToPlaylistBtn videoId={videoId} />}
      </div>
    </SongCardWrapper>
  );
}

export default SongCard;

const SongCardWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.06);
  border-radius: 5px;
  margin: 0.2rem 0rem;
  height: 3rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .thumbnail-title-container {
    border-radius: 5px;
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

    .song-info:hover {
      h3,
      p {
        color: #1dd1a1;
      }
    }
  }

  .album-cover {
    border-radius: 10px;
    box-shadow: 10px 10px 25px rgba(255, 255, 255, 0.05);
    height: 3rem;
    width: 3rem;
    border-radius: 2px;
  }

  .play-symbol-container {
    margin-right: 0.5rem;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
  }

  @media (max-width: 648px) {
    h3 {
      font-size: 1rem;
    }
  }

  @media (max-width: 390px) {
    h3 {
      font-size: 0.8rem;
    }
    p {
      font-size: 0.7rem;
    }
  }
`;
