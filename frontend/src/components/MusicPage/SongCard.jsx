import React, { useContext } from 'react';
import { playerControllerStateContext } from '../../context/YouTubePlayerContext';
import { PLAYER_ACTIONS } from '../../reducers/YouTubePlayerReducer';
import styled from 'styled-components';
import { MdPlayCircleOutline } from 'react-icons/md';
import { BsHeart, BsPlusCircle } from 'react-icons/bs';

function SongCard({ videoId, name, artist, thumbnails }) {
	const [{ currentSong }, dispatch] = useContext(playerControllerStateContext);


	return (
		<SongCardWrapper>
			<div className='thumbnail-title-container'>
				<div style={{ backgroundImage: `url(${thumbnails[1].url})` }} className='album-cover'></div>

				<div className='song-info'>
					<h3>{artist.name}</h3>
					<p>{name}</p>
				</div>
			</div>

			<div className='play-symbol-container'>
				<BsPlusCircle style={{ marginRight: '1rem' }} />
				<BsHeart />
				<MdPlayCircleOutline
					onClick={() => dispatch({ type: PLAYER_ACTIONS.SET_CURRENT_SONG, payload: videoId })}
					className='play-btn'
				/>
			</div>
		</SongCardWrapper>
	);
}


export default SongCard;

const SongCardWrapper = styled.div`
	background-color: rgba(255, 255, 255, 0.1);
	border-radius: 5px;
	margin: 0.2rem 0rem;
	height: 3rem;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-start;

	.thumbnail-title-container {
		display: flex;
		background-position: center;
		background-size: cover;

		.song-info {
			display: flex;
			flex-direction: column;
			text-align: start;
			align-items: flex-start;
			justify-content: flex-end;
			margin-left: 1rem;
		}
	}

	.album-cover {
		height: 3rem;
		width: 3rem;
		border-radius: 2px;
	}

	.play-symbol-container {
		height: auto;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;

		.play-btn {
			font-size: 1.5rem;
			margin: 1rem;
			&:hover {
				color: #2ecc71;
				transition: ease-in-out 0.2s;
				cursor: pointer;
			}
		}
	}
`;

