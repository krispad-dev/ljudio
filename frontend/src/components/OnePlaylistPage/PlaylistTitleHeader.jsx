import React from 'react';
import styled from 'styled-components';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ShareUrlBtn from '../ShareUrlBtn';
import FollowBtn from '../FollowBtn';
import { useParams } from 'react-router';
import useGetSongs from '../../hooks/useGetSongs';

function PlaylistTitleHeader({ title, thumbnail }) {
  const { id } = useParams();

  // console.log('THUMBNAIL', thumbnail[0]);

  // const { data } = useGetSongs(thumbnail[0]);

  // console.log('THUMBNAIL', data);

  return (
    <PlaylistTitleHeaderWrapper>
      <img
        className='playlist-title-img'
        // src={
        //   data && data.searchResults.content[0].thumbnails[1].url
        //     ? data && data.searchResults.content[0].thumbnails[1].url
        //     : 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
        // }
        src='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
        alt=''
      />
      <div className='playlist-info'>
        <h2>{title}</h2>
        <h3>by: {'user'}</h3>
        <FollowBtn playlistId={id} />
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
