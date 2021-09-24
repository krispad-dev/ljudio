import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FollowBtn from '../FollowBtn';

import useGetOneArtist from '../../hooks/useGetOneArtist';
import useGetSongs from '../../hooks/useGetSongs';
import useGetOneSavedUserPlaylist from '../../hooks/useGetOneSavedUserPlaylist';

import { FaUser } from 'react-icons/fa';

function AllPlaylistsListItemCard({ title, userName, playlistId, followCount, bgColor }) {
	const { data: playlist } = useGetOneSavedUserPlaylist(playlistId);
	const { data: song } = useGetSongs(
		playlist && playlist.playlist && playlist.playlist.songs && playlist.playlist.songs[0]
	);

	const { data: artist } = useGetOneArtist(
		song &&
			song.searchResults &&
			song.searchResults.content &&
			song.searchResults.content[0].artist &&
			song.searchResults.content[0].artist.browseId
	);

	const bgImage = artist && artist.artist && artist.artist.thumbnails && artist.artist.thumbnails[2];

	return (
		<AllPlaylistsListItemCardWrapper
			style={{ backgroundColor: bgColor, backgroundImage: `url(${bgImage && bgImage.url})` }}
		>
			<div className='follow'>
				<FollowBtn playlistId={playlistId} />
				<h3>{userName}</h3>
			</div>
			<Link className='link' to={`/playlist/${playlistId}`}>
				<div className={'info-container'}>{/* 					<h3>
						<FaUser />: {followCount}
					</h3> */}</div>
				<div className='title-container'>
					<h1>{title}</h1>
				</div>
			</Link>
		</AllPlaylistsListItemCardWrapper>
	);
}

export default AllPlaylistsListItemCard;

const AllPlaylistsListItemCardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	background-color: pink;
	border-radius: 2px;

	background-position: center;
	.follow {
		display: flex;
		justify-content: space-between;
		width: 100%;

		h3 {
			font-size: 2rem;
			background-color: #111;
			color: #eee;
		}

	}
	.title-container {
		display: flex;
		justify-content: flex-start;
		align-items: flex-end;
		background-color: black;
		opacity: 0.8;
	}

	h1 {
		font-size: 2rem;
		color: white;
		text-align: center;
	}

	&:hover {
		transform: scale(1.01);
		opacity: 80%;
		transition: ease-in-out 0.2s;
		cursor: pointer;
	}

	.link {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		width: 100%;
		height: 100%;
	}

	.info-container {
		width: 100%;
		height: 50%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	h3 {
		color: #fff;
		color: black;
		font-size: 1.3rem;
		font-weight: 400;
	}
`;
