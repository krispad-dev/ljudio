import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import RemoveUserPlaylist from '../../RemoveUserPlaylist';
import useGetFollowedPlaylists from '../../../hooks/useGetFollowedPlaylists';
import FollowBtn from '../../FollowBtn';


function PlayListCardItem({ title, playlistId, id }) {

  const { data } = useGetFollowedPlaylists();

  return (
    <PlayListCardItemWrapper>
      <Link to={`/playlist/${playlistId ? playlistId : id}`}>
        <p>{title}</p>
      </Link>
      {data && !data.followedPlaylists.find((item => item.playlistId === playlistId)) && <RemoveUserPlaylist playlistId={id} />}
      {data && data.followedPlaylists.find((item => item.playlistId === playlistId)) && <FollowBtn playlistId={playlistId} />}
    </PlayListCardItemWrapper>
  );
}

const PlayListCardItemWrapper = styled.li`
  &:hover {
    opacity: 60%;
    transition: 0.2s ease-in-out;
  }

  height: 3rem;
  background-color: #212121;
  border: 3px solid black;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
  }
`;

export default PlayListCardItem;
