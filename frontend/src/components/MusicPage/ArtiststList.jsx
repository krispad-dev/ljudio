import React, { useContext } from 'react';
import { UiContext } from '../../context/UiState';
import styled from 'styled-components';
import useGetArtists  from '../../hooks/useGetArtists'
import Loader from '../Loader'
import ArtistCard from './ArtistCard';




function ArtiststList() {

    const { state } = useContext(UiContext); 
    const { data, isLoading } = useGetArtists(state.searchString)

    return (
        <ArtistsListWrapper>
           
            {isLoading && <Loader text="Loading music..." />}

            {data && 
            data.searchResults && 
            data.searchResults.content && 
            data.searchResults.content.map(item => {
                    return <ArtistCard key={item.videoId} {...item} />
            })} 
            
        </ArtistsListWrapper>
    );
}

export default ArtiststList;


const ArtistsListWrapper = styled.div`
	width: 100;
	display: grid;
	gap: 0.5rem;
	grid-template-rows: 10rem 10rem;
	grid-template-columns: 20% 20% auto 20% 20%;

`;