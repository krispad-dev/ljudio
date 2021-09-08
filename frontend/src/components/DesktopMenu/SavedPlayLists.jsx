import React from 'react';
import PlayListCard from './PlayListCard';
import styled from 'styled-components';

function SavedPlayLists() {
  // PLACEHOLDER HERE WILL WE INMPORT DATA WITH React query
  const mockData = [
    { playlistName: 'BestTracks', song: 10 },
    { playlistName: 'Hits', song: 30 },
    { playlistName: 'Blues', song: 25 },
  ];

  return (
    <SavedPlayListsWrapper>
      <h1>Saved Playlist:</h1>
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
    </SavedPlayListsWrapper>
  );
}

const SavedPlayListsWrapper = styled.div`
  color: #c4c4c4;
`;

export default SavedPlayLists;
