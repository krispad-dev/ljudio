import React from 'react';
import styled from 'styled-components';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import useGetSongs from '../../hooks/useGetSongs';

function SongCardItem({ song }) {
	//Video ID får göra en förfågan till Youtbe-api.

	const { data } = useGetSongs(song);
	console.log(data);

	return (
		<PlaylistsCardWrapper>
			<div className='artist-song-container'>
				<h2>{data && data.searchResults.content[0].name}</h2>
				<h3>{data && data.searchResults.content[0].artist.name}</h3>
			</div>

			<div className='album-container'>
				<h2>{data && data.searchResults.content[0].album.name}</h2>
				<h3>gaergae</h3>
			</div>

			<div className='duration-container'>
				<h3>Duration</h3>
				<h2>{data && data.searchResults.content[0].duration}</h2>
			</div>
			<div className='icon-container'>
				<button className='play-btn'>{<PlayCircleOutlineIcon />}</button>
				<button className='add-btn'>{<AddCircleIcon />}</button>
				<button className='favorite-btn'>{<FavoriteIcon />}</button>
			</div>
		</PlaylistsCardWrapper>
	);
}

const PlaylistsCardWrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;

	.artist-song-container,
	.album-container,
	.duration-container {
		margin: 1rem;
		width: 250px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	}

	.icon-container {
		width: 100px;
		display: flex;
		justify-content: space-evenly;
	}

	.play-btn,
	.add-btn,
	.favorite-btn {
		all: unset;
		color: #c4c4c4;
		cursor: pointer;
	}
`;

export default SongCardItem;
