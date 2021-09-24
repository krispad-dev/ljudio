import React from 'react';
import { BsHeart } from 'react-icons/bs';
import styled from 'styled-components';
import { isInPlaylist } from '../helpers/helpers';

import useFollowPlaylist from '../hooks/useFollowPlaylist';
import useGetFollowedPlaylists from '../hooks/useGetFollowedPlaylists';
import useUnfollowPlaylist from '../hooks/useUnfollowPlaylist';

function FollowBtn({ playlistId }) {
  const { mutate: follow } = useFollowPlaylist();
  const { mutate: unFollow } = useUnfollowPlaylist();

  const { data } = useGetFollowedPlaylists();

  function onClickHandler() {
    if (isInPlaylist(playlistId, data.followedPlaylists)) unFollow({ playlistId });
    if (!isInPlaylist(playlistId, data.followedPlaylists)) follow({ playlistId });
  }

  return (
    <FollowBtnWrapper onClick={onClickHandler}>
      <BsHeart
        className={'follow-playlist-btn'}
        style={{
          marginRight: '0.5rem',
          fontSize: ' 1rem',
          color: `${
            data && data.followedPlaylists && isInPlaylist(playlistId, data.followedPlaylists) ? '#1dd1a1' : 'white'
          }`,
        }}
      />
      {data && data.followedPlaylists && !isInPlaylist(playlistId, data.followedPlaylists) ? 'FOLLOW' : 'UNFOLLOW'}
    </FollowBtnWrapper>
  );
}

export default FollowBtn;

const FollowBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 2px;
  color: #fff;
  font-size: 1rem;
  background-color: #222;
  cursor: pointer;
  &:hover {
    opacity: 80%;
  }

  .follow-playlist-btn {
    color: #fff;

    &:hover {
      color: red;
      cursor: pointer;
      transition: 0.1s ease-in-out;
    }
  }
`;
