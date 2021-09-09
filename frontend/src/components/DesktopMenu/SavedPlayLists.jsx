import React from 'react';
import PlayListCard from './PlayListCard';
import styled from 'styled-components';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function SavedPlayLists() {
  // PLACEHOLDER HERE WILL WE INMPORT DATA WITH React query
  const mockData = [
    { playlistName: 'BestTracks', song: 10 },
    { playlistName: 'Hits', song: 30 },
    { playlistName: 'Blues', song: 25 },
    { playlistName: 'Blues', song: 25 },
    { playlistName: 'Blues', song: 25 },
    { playlistName: 'Blues', song: 25 },
    { playlistName: 'Blues', song: 25 },
    { playlistName: 'Blues', song: 25 },
    { playlistName: 'Blues', song: 25 },
    { playlistName: 'Blues', song: 25 },
    { playlistName: 'Blues', song: 25 },
    { playlistName: 'Blues', song: 25 },
    { playlistName: 'Blues', song: 25 },
    { playlistName: 'Blues', song: 25 },
    { playlistName: 'Blues', song: 25 },
    { playlistName: 'Blues', song: 25 },
    { playlistName: 'Blues', song: 25 },
  ];

  return (
    <SavedPlayListsWrapper>
      {mockData.map((playlists) => {
        return (
          <PlayListCard
            url={'/'}
            playlistName={playlists.playlistName}
            song={playlists.song}
          />
        );
      })}
    </SavedPlayListsWrapper>
  );
}

const SavedPlayListsWrapper = styled.div`
  color: #c4c4c4;
  height: 10rem;
  overflow: scroll;
  overflow-x: hidden;
  margin-bottom: 1rem;
`;

export default SavedPlayLists;
