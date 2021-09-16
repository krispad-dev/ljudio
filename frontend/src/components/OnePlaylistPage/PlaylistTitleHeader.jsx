import React from 'react';
import styled from 'styled-components';
import PublishIcon from '@material-ui/icons/Publish';
import AddCircleIcon from '@material-ui/icons/AddCircle';

function PlaylistTitleHeader({ title }) {
  return (
    <PlaylistTitleHeaderWrapper>
      <div className='playlist-title-container'>
        <img
          className='playlist-title-img'
          src='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
          alt=''
        />
        <div className='playlist-info'>
          <h4>PLAYLIST</h4>
          <h1>{title}</h1>
          <p>{<AddCircleIcon />}</p>
        </div>
      </div>
      <div className='share-container'>
        <h3>SHARE PLAYLIST {<PublishIcon />}</h3>
      </div>
    </PlaylistTitleHeaderWrapper>
  );
}

const PlaylistTitleHeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'playlist share';
  justify-items: flex-start;

  .playlist-title-container {
    width: 100%;
    margin: 1rem 1rem 1rem 1rem;
    display: flex;
    align-items: center;
    grid-area: 'playlist';
  }

  .share-container {
    grid-area: 'share';
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    h3 {
      cursor: pointer;
      margin: 1rem 1rem 2rem 1rem;
    }
  }

  .playlist-info {
    margin-left: 1rem;

    h4 {
      font-size: 0.8rem;
    }

    h1 {
      font-size: 2rem;
    }

    p {
      cursor: pointer;
    }
  }

  .playlist-title-img {
    width: 240px;
    height: 200px;
  }
`;

export default PlaylistTitleHeader;
