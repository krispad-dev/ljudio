import React from 'react';
import styled from 'styled-components';
import PlaylistList from '../components/OnePlaylistPage/PlaylistList';

function OnePlaylistPage({ match }) {
  return (
    <OnePlaylistsPageWrapper>
      <PlaylistList match={match} />
    </OnePlaylistsPageWrapper>
  );
}

const OnePlaylistsPageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default OnePlaylistPage;
