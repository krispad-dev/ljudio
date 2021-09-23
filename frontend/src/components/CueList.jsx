import React from 'react';
import styled from 'styled-components';
import SongCardItem from '../components/OnePlaylistPage/SongCardItem';


function CueList() {
    return (
        <CueListWrapper>
            {cue_songs.map(song => <SongCardItem key={song.id} {...song} />)}
        </CueListWrapper>
    );
}

export default CueList;


const CueListWrapper = styled.div`
    color: #FFF;
`;