import React from 'react';
import styled from 'styled-components';


function Loader({ text }) {
    return (
        <LoaderWrapper>
            <div className="loader-container">
                <div className="loader-spinner"></div>
                <h4>{text}</h4>
            </div>
        </LoaderWrapper>
    );
}

export default Loader;


const LoaderWrapper = styled.div`

    .loader-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .loader-spinner {
        width: 75px;
        height: 75px;
        border-radius: 50%;
        border: 10px solid grey;
        border-top: 10px solid white;
        animation: spinLoader 1s infinite linear;
    }

    .loader-container h4 {
        margin: 1rem;
        font-size: 1.2rem;
    }

    @keyframes spinLoader {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }


`;