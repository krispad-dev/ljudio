import React from 'react';
import styled from 'styled-components';
import CueList from '../components/CueList';


function CuePage() {

    const imgSrc = 'https://images.unsplash.com/photo-1599955050928-c15ca465b8e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'

    return (
        <CuePageWrapper>
            <div 
            style={{ backgroundImage: `url(${imgSrc})` }}
            className="header-img">  
            <h1>Songs in cue</h1>
            </div>

            <CueList />
        </CuePageWrapper>
    );
}

export default CuePage;


const CuePageWrapper = styled.div`
    width: 100%;
    height: 100%;

    .header-img {
        height: 15rem;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;

        h1 {
            font-weight: 900;
            color: #fff;
            font-size: 3rem;
            align-self: flex-end;
            border-radius: 5px;
            margin: 1rem;
        }
    }
`;