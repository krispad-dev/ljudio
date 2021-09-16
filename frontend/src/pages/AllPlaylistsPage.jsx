<<<<<<< HEAD
import React from 'react'
import AllPlaylistsList from '../components/AllPlaylistsPage/AllPlaylistsList'
import styled from 'styled-components'

function AllPlaylistsPage() {
    return (
        <AllPlaylistsPageWrapper>
            <h1>Playlists:</h1>
            <AllPlaylistsList />
        </AllPlaylistsPageWrapper>
    )
}

export default AllPlaylistsPage

const AllPlaylistsPageWrapper = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;


`
=======
import React from 'react';
import AllPlaylistsList from '../components/AllPlaylistsPage/AllPlaylistsList';

function AllPlaylistsPage() {
  return (
    <div>
      <h1>Playlists:</h1>
      <AllPlaylistsList />
    </div>
  );
}

export default AllPlaylistsPage;
>>>>>>> dev
