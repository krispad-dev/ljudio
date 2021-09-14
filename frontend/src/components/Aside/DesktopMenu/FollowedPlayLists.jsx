import React from 'react';
import PlayListCardItem from './PlayListCardItem';
import styled from 'styled-components';
import useGetFollowedPlaylists from '../../../hooks/useGetFollowedPlaylists';

function FollowedPlaylists() {
  // PLACEHOLDER HERE WILL WE INMPORT DATA WITH React query

   const { data } = useGetFollowedPlaylists();

   console.log(data);


  return (
    <FollowingPlayListWrapper>
      {data && data.followedPlaylists && data.followedPlaylists.map((playlist) => {
        return <PlayListCardItem {...playlist} />;
      })}
    </FollowingPlayListWrapper>
  );
}

const FollowingPlayListWrapper = styled.ul`
  ::-webkit-scrollbar {
    display: none;
  }
  color: #c4c4c4;
  height: 10rem;
  overflow: scroll;
  overflow-x: hidden;
  margin-bottom: 10px;
  width: 200px;
`;

export default FollowedPlaylists;
