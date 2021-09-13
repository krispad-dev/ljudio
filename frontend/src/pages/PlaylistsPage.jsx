import React from 'react';
import styled from 'styled-components';
import PlaylistList from '../components/PlaylistsPage/PlaylistList';

function PlaylistsPage({ match }) {

  return (
    <PlaylistsPageWrapper>
        <PlaylistList match={match} />
    </PlaylistsPageWrapper>
  );
}

const PlaylistsPageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default PlaylistsPage;
