import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useGetOneArtist from '../../hooks/useGetOneArtist';
import noDescriptionPlaceholder from '../../assets/na.svg'


function ArtistCard({ name, bgColor, browseId }) {
	const { data: oneArtist } = useGetOneArtist(browseId);

	const bgImage = oneArtist && oneArtist.artist && oneArtist.artist.thumbnails && oneArtist.artist.thumbnails;

	return (
		<ArtistCardWrapper style={{ backgroundColor: bgColor }}>
			<Link to={`/artist/${browseId}`}>
				<div className={'background-image'} style={{ backgroundImage: `url(${bgImage ? bgImage[1].url : noDescriptionPlaceholder})` }}>
					<h3>{name}</h3>
				</div>
			</Link>
		</ArtistCardWrapper>
	);
}

export default ArtistCard;

const ArtistCardWrapper = styled.div`
	a {
		width: 100%;
		height: 100%;
	}
	&:hover {
		transform: scale(1.01);
		opacity: 80%;
		transition: ease-in-out 0.2s;
		cursor: pointer;
	}

	.info-container {
		width: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: flex-end;
	}

	.background-image {
		display: flex;
		justify-content: flex-start;
		align-items: flex-end;
		box-shadow: 15px 15px 25px rgba(0, 0, 0, 0.2);
		width: 100%;
		height: 100%;
		border-radius: 5px;

		background-position: center;
		background-size: cover
	}

	background-position: center;
	background-size: cover;
	border-radius: 5px;

	h3 {
		font-weight: 200;
		color: #000;
		font-size: 2.5rem;
		background-color: white;
	}
`;
