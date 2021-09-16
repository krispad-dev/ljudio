import React from 'react';
import styled from 'styled-components';

function ArtistCard({ artist, thumbnails, name }) {
	return (
		<ArtistAcrdWrapper style={{ backgroundImage: `url(${thumbnails[1].url})` }}>
			<h3>{name}</h3>
		</ArtistAcrdWrapper>
	);
}

export default ArtistCard;

const ArtistAcrdWrapper = styled.div`
    background-color: pink;
    background-position: center;
    background-size: cover;

h3 {
    background-color: #000;
    width: 50%;
    font-size: 1rem;
    font-weight: 400;
}
`;
