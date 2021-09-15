import React from 'react';
import PlayListCardItem from './PlayListCardItem';
import styled from 'styled-components';
import useGetSavedUserPlaylists from '../../../hooks/useGetSavedUserPlaylists';

function SavedPlayLists() {
  const { data } = useGetSavedUserPlaylists();

  return (
    <SavedPlayListsWrapper>
      {data &&
        data.userPlaylists &&
        data.userPlaylists.map((playlist) => {
          return <PlayListCardItem key={playlist.id} {...playlist} />;
        })}
    </SavedPlayListsWrapper>
  );
}

const SavedPlayListsWrapper = styled.ul`
  ::-webkit-scrollbar {
    display: none;
  }
  color: #c4c4c4;
  height: 5rem;
  overflow: scroll;
  overflow-x: hidden;
  margin-bottom: 10px;
  width: 10rem;
`;

export default SavedPlayLists;
