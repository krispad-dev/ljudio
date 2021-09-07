import React, { useContext } from 'react';
import { UiContext } from '../context/UiState';
import useGetSongs from '../hooks/useGetSongs';
import Loader from '../components/Loader';


function MusicPage() {

    const { state } = useContext(UiContext);

    const { data, isLoading } = useGetSongs(state.searchString);

    if(isLoading) {
        return <Loader text="Loading music..." />
    }

    return (
        <div>
            
            {data && data.searchResults && data.searchResults.content && data.searchResults.content.map(item => {
                return <p>{item.artist.name} - {item.name}</p>
            })}

            {data && 
            data.searchResults && 
            data.searchResults.content && 
            data.searchResults.content.length === 0 && <p>No matches</p>}

            {data && data.searchResults && !data.searchResults.content && <p>No matches</p>}

        </div>
    );
}

export default MusicPage;
