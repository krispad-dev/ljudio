import React from 'react';
import styled from 'styled-components';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ShareUrlBtn from '../ShareUrlBtn';
import FollowBtn from '../FollowBtn';
import { useParams } from 'react-router';

function PlaylistTitleHeader({ title }) {

  const { id } = useParams()


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
          <FollowBtn playlistId={id} />
        </div>
      </div>
      <div className='share-container'>
        <h3>SHARE PLAYLIST</h3>
        <ShareUrlBtn iconFontSize={'2rem'} />
      </div>
    </PlaylistTitleHeaderWrapper>
  );
}

const PlaylistTitleHeaderWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'playlist share';
  justify-items: flex-start;

  .playlist-title-container {
    width: 90%;
    display: flex;
    align-items: center;
    grid-area: 'playlist';

    .playlist-info {
      margin-left: 10px;
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
  }

  .share-container {
    grid-area: 'share';
    width: 90%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    align-items: center;

    h3 {
      margin-right: 10px;
    }
  }

  .playlist-title-img {
    width: 100%;
    max-width: 400px;
    height: auto;
  }
`;

export default PlaylistTitleHeader;
