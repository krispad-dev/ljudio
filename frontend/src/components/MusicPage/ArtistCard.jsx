import React from 'react';
import styled from 'styled-components';

function ArtistCard({ artist, thumbnails, name }) {
	return (
		<ArtistAcrdWrapper style={{ backgroundImage: `url(${thumbnails[1].url})` }}>
{/* 			<h3>{name}</h3> */}
		</ArtistAcrdWrapper>
	);
}

export default ArtistCard;

const ArtistAcrdWrapper = styled.div`
    background-color: pink;
    background-position: center;
    background-size: cover;

h3 {
    background-color: #333;
    width: 50%;
}
`;
