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
        data.userPlaylists.length > 0 &&
        data.userPlaylists.map((playlist) => {
          return <PlayListCardItem key={playlist.id} {...playlist} />;
        })}
        {data &&
          data.userPlaylists &&
          data.userPlaylists.length === 0 &&
          <p>No playlists yet =/</p>
        }
    </SavedPlayListsWrapper>
  );
}

const SavedPlayListsWrapper = styled.ul`
width: 100%;
  ::-webkit-scrollbar {
    display: none;
  }
  color: #c4c4c4;
  height: auto;

  margin-bottom: 10px;

`;

export default SavedPlayLists;
