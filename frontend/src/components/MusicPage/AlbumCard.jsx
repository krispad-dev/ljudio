import React from 'react';
import styled from 'styled-components';

function AlbumCard({ thumbnails, name }) {
	return (
		<AlbumCardWrapper style={{backgroundImage: `url(${thumbnails[1].url})`}}>
		</AlbumCardWrapper>
	);
}

export default AlbumCard;

const AlbumCardWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;

    background-color: pink;
    background-position: center;
    background-size: cover;


    h3 {
    background-color: #333;
    width: 50%;
}

`;
