import React, { useState } from 'react';
import styled from 'styled-components';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ShareUrlBtn from '../ShareUrlBtn';
import FollowBtn from '../FollowBtn';
import { useParams } from 'react-router';
import useGetSongs from '../../hooks/useGetSongs';

function PlaylistTitleHeader({ title, playlist }) {
  let playlistImg = null;

  const { id } = useParams();

  if (playlist && playlist.songs[0]) {
    const { data } = useGetSongs(playlist.songs[0]);

    playlistImg = data && data.searchResults.content[0].thumbnails[1].url;
  }

  return (
    <PlaylistTitleHeaderWrapper>
      <img
        className='playlist-title-img'
        src={
          !playlistImg
            ? 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
            : playlistImg
        }
        alt=''
      />
      <div className='playlist-info'>
        <h2>{title}</h2>
        <h3>by: {'user'}</h3>
        <div className='follow-container'>
          <FollowBtn playlistId={id} />
        </div>
        <ShareUrlBtn />
      </div>
    </PlaylistTitleHeaderWrapper>
  );
}

const PlaylistTitleHeaderWrapper = styled.div`
  display: flex;

  img {
    width: 100%;
    max-width: 200px;
  }

  .playlist-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    margin-left: 1rem;

    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1rem;
    }
  }

  .follow-container {
    width: 120px;
  }

  @media (min-width: 600px) {
    img {
      max-width: 350px;
    }
    .playlist-info {
      h2 {
        font-size: 2.2rem;
      }

      h3 {
        font-size: 1.5rem;
      }
    }
  }
`;

export default PlaylistTitleHeader;
