import React from 'react';
import PlayListCard from './PlayListCard';
import styled from 'styled-components';

function FollowingPlayList() {
  // PLACEHOLDER HERE WILL WE INMPORT DATA WITH React query
  const mockData = [
    { playlistName: 'Calm Piano', song: 17 },
    { playlistName: 'Hard Drums', song: 30 },
    { playlistName: 'Solo Guitar', song: 25 },
    { playlistName: 'Blues', song: 25 },
    { playlistName: 'Blues', song: 25 },
    { playlistName: 'Blues', song: 25 },
    { playlistName: 'Blues', song: 25 },
    { playlistName: 'Blues', song: 25 },
    { playlistName: 'Blues', song: 25 },
    { playlistName: 'Calm Piano', song: 17 },
    { playlistName: 'Hard Drums', song: 30 },
    { playlistName: 'Solo Guitar', song: 25 },
    { playlistName: 'Blues', song: 25 },
    { playlistName: 'Blues', song: 25 },
    { playlistName: 'Blues', song: 25 },
    { playlistName: 'Blues', song: 25 },
    { playlistName: 'Blues', song: 25 },
    { playlistName: 'Blues', song: 25 },
    { playlistName: 'Calm Piano', song: 17 },
    { playlistName: 'Hard Drums', song: 30 },
    { playlistName: 'Solo Guitar', song: 25 },
    { playlistName: 'Blues', song: 25 },
    { playlistName: 'Blues', song: 25 },
    { playlistName: 'Blues', song: 25 },
    { playlistName: 'Blues', song: 25 },
    { playlistName: 'Blues', song: 25 },
    { playlistName: 'Blues', song: 25 },
    { playlistName: 'Calm Piano', song: 17 },
    { playlistName: 'Hard Drums', song: 30 },
    { playlistName: 'Solo Guitar', song: 25 },
    { playlistName: 'Blues', song: 25 },
    { playlistName: 'Blues', song: 25 },
    { playlistName: 'Blues', song: 25 },
    { playlistName: 'Blues', song: 25 },
    { playlistName: 'Blues', song: 25 },
    { playlistName: 'Blues', song: 25 },
    { playlistName: 'Calm Piano', song: 17 },
    { playlistName: 'Hard Drums', song: 30 },
    { playlistName: 'Solo Guitar', song: 25 },
    { playlistName: 'Blues', song: 25 },
    { playlistName: 'Blues', song: 25 },
    { playlistName: 'Blues', song: 25 },
    { playlistName: 'Blues', song: 25 },
    { playlistName: 'Blues', song: 25 },
    { playlistName: 'Blues', song: 25 },
    { playlistName: 'Calm Piano', song: 17 },
    { playlistName: 'Hard Drums', song: 30 },
    { playlistName: 'Solo Guitar', song: 25 },
    { playlistName: 'Blues', song: 25 },
    { playlistName: 'Blues', song: 25 },
    { playlistName: 'Blues', song: 25 },
    { playlistName: 'Blues', song: 25 },
    { playlistName: 'Blues', song: 25 },
    { playlistName: 'Blues', song: 25 },
  ];

  return (
    <FollowingPlayListWrapper>
      {mockData.map((playlist) => {
        return (
          <>
            <PlayListCard
              url={'/'}
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
  height: 10rem;
  overflow: scroll;
  overflow-x: hidden;
  margin-bottom: 10px;
`;

export default FollowingPlayList;
