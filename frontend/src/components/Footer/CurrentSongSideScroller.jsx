import React, { useContext } from 'react';
import { playerControllerStateContext } from '../../context/YouTubePlayerContext';
import styled from 'styled-components';
import Marquee from 'react-fast-marquee';

function CurrentSongSideScroller() {
	const [{ currentSong, isPlaying }, dispatch] = useContext(playerControllerStateContext);


	return (
		<CurrentSongDisplayerWrapper>
			<Marquee gradient={false}>
				<h4>
					<strong>&nbsp;{currentSong && currentSong.name}</strong>
				</h4>
				{currentSong  && <p> ///&nbsp;&nbsp;</p>}
				<p>&nbsp;{currentSong && currentSong.artist && currentSong.artist.name && currentSong.artist.name}</p>
			</Marquee>
		</CurrentSongDisplayerWrapper>
	);
}

export default CurrentSongSideScroller;

const CurrentSongDisplayerWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: none;
	color: #fff;
	font-weight: 200;

	h4 {
		margin: 1rem;
	}
`;
