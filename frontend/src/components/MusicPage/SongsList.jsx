import React, { useContext } from 'react';
import { UiContext } from '../../context/UiState';
import useGetSongs from '../../hooks/useGetSongs';
import SongCard from './SongCard';
import Loader from '../Loader';
import styled from 'styled-components';

function SongsList() {

    const { state } = useContext(UiContext); 
    const { data, isLoading } = useGetSongs(state.searchString);
    
    const songs = data?.searchResults?.content?.filter(item => item.type === 'song');

    console.log(songs);

    return (
        <SongListWrapper>
            {isLoading && <Loader text="Loading music..." />}

            {data && 
            data.searchResults && 
            data.searchResults.content && 
            data.searchResults.content.map(item => {
                    return <SongCard key={item.videoId} {...item} />
            })}
        </SongListWrapper>
    );
}

export default SongsList;


const SongListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    

`;
