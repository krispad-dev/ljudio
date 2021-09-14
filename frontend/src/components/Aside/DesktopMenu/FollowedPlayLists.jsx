import React from 'react';
import PlayListCardItem from './PlayListCardItem';
import styled from 'styled-components';
import useGetFollowedPlaylists from '../../../hooks/useGetFollowedPlaylists';

function FollowedPlaylists() {
  // PLACEHOLDER HERE WILL WE INMPORT DATA WITH React query

  // const { data } = useGetFollowedPlaylists();

  const mockData = [
    { title: 'Hard Drums', id: 1 },
    { title: 'Solo Guitar', id: 2 },
    { title: 'Calm Piano', id: 3 },
    { title: 'Calm Piano', id: 4 },
    { title: 'Hard Drums', id: 5 },
    { title: 'Solo Guitar', id: 6 },
    { title: 'Calm Piano', id: 7 },
    { title: 'Hard Drums', id: 8 },
    { title: 'Solo Guitar', id: 9 },
  ];

  return (
    <FollowingPlayListWrapper>
      {mockData.map((playlist) => {
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
