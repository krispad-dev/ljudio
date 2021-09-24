import React from 'react';
import styled from 'styled-components';
import SongCardItem from '../components/OnePlaylistPage/SongCardItem';
import useGetAllCued from '../hooks/useGetAllCued';

function CueList() {

    const { data } = useGetAllCued();

    return (
        <CueListWrapper>
            {data && data.cue.map(song => <SongCardItem key={song.id} song={song.videoId} cueId={song.id} />)}
        </CueListWrapper>
    );
}

export default CueList;


const CueListWrapper = styled.div`
    
`;