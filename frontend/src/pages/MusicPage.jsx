import React, { useContext } from 'react';
import { UiContext } from '../context/UiState';
import useGetSongs from '../hooks/useGetSongs';
import styled from 'styled-components';
import Loader from '../components/Loader';
import SongsList from '../components/MusicPage/SongsList';


function MusicPage() {

    const { state } = useContext(UiContext);
    const { data, isLoading } = useGetSongs(state.searchString);

    if(isLoading) {
        return <Loader text="Loading music..." />
    }

    
    return (
        <MusicPageWrapper>
            
            <div className="songs-list">
                <SongsList />
            </div>

            <div className="artists-list">
                {/* <ArtistsList /> */}
            </div>

            <div className="albums-list">
                {/* <AlbumsList /> */}
            </div>

            {data && 
            data.searchResults && 
            data.searchResults.content && 
            data.searchResults.content.length === 0 && <p>No matches</p>}

            {data && data.searchResults && !data.searchResults.content && <p>No matches</p>}

        </MusicPageWrapper>
    );
}

export default MusicPage;


const MusicPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;