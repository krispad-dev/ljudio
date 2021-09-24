import React from 'react';
import styled from 'styled-components';
import CueList from '../components/CueList';


function CuePage() {
    return (
        <CuePageWrapper>
            <h1>Songs in cue</h1>
            <CueList />
        </CuePageWrapper>
    );
}

export default CuePage;


const CuePageWrapper = styled.div`



`;