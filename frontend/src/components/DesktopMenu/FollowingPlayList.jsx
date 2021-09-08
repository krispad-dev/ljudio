import React from 'react';
import PlayListCard from './PlayListCard';
import styled from 'styled-components';

function FollowingPlayList() {
  // PLACEHOLDER HERE WILL WE INMPORT DATA WITH React query
  const mockData = [
    { playlistName: 'Calm Piano', song: 17 },
    { playlistName: 'Hard Drums', song: 30 },
    { playlistName: 'Solo Guitar', song: 25 },
  ];

  return (
    <FollowingPlayListWrapper>
      <h1>Following:</h1>
      {mockData.map((playlist) => {
        return (
          <>
            <PlayListCard
              playlistName={playlist.playlistName}
              song={playlist.song}
            />
          </>
        );
      })}
    </FollowingPlayListWrapper>
  );
}

const FollowingPlayListWrapper = styled.div`
  color: #c4c4c4;
`;

export default FollowingPlayList;
