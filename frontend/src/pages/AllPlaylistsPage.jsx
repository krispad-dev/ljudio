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
margin-top: 1rem ;
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
h1{
    margin-bottom: 1rem;
    font-weight: 500;
    text-transform: uppercase;
    color: #eee;
}

`
