import React from 'react';
import styled from 'styled-components';

function ArtistCard({ artist, thumbnails, name, bgColor }) {
	return (
		<ArtistAcrdWrapper style={{ backgroundColor: bgColor }}>
			<div className={'background-image'} style={{ backgroundImage: `url(${thumbnails[1].url})` }}></div>
			<div className={'info-container'}>
				<h3>{name}</h3>
			</div>
		</ArtistAcrdWrapper>
	);
}

export default ArtistCard;

const ArtistAcrdWrapper = styled.div`
	&:hover {
		transform: scale(1.01);
		opacity: 80%;
		transition: ease-in-out 0.2s;
		cursor: pointer;
	}
	display: flex;
	flex-direction: column;
	align-items: flex-start;

    .info-container {
        width: 50%;
        display: flex;
        justify-content: center;
    }

	.background-image {
		box-shadow: 15px 15px 25px rgba(0, 0, 0, 0.2);
		width: 50%;
		height: 50%;
		border-radius: 5px;

		background-position: center;
		background-size: cover;
	}

	background-color: pink;
	background-position: center;
	background-size: cover;
	border-radius: 5px;

	h3 {
		align-self: center;
		color: #fff;
		width: 50%;
		font-size: 1.5rem;
		font-weight: 400;
        width: 100%;
	}
`;
