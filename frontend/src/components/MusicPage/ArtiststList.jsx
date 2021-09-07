import React, { useContext } from 'react';
import { UiContext } from '../../context/UiState';
import useGetSongs from '../../hooks/useGetSongs';
import Loader from '../Loader';


function ArtiststList() {

    const { state } = useContext(UiContext); 
    const { data, isLoading } = useGetSongs(state.searchString);

    const artists = data?.searchResults?.content?.filter(item => item.type === 'artists');

    console.log(artists);

    return (
        <ArtistsListWrapper>
            {isLoading && <Loader text="Loading music..." />}

            {data && 
            data.searchResults && 
            data.searchResults.content && 
            data.searchResults.content.map(item => {
                    return <SongCard key={item.videoId} {...item} />
            })}
            
        </ArtistsListWrapper>
    );
}

export default ArtiststList;


const ArtistsListWrapper = styled.div`



`;