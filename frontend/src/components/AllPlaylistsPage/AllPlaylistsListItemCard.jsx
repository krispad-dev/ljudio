import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FollowBtn from '../FollowBtn';

import useGetOneArtist from '../../hooks/useGetOneArtist';
import useGetSongs from '../../hooks/useGetSongs';
import useGetOneSavedUserPlaylist from '../../hooks/useGetOneSavedUserPlaylist';

const fallbackPlaceholderImage =
  'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80';


function AllPlaylistsListItemCard({ title, userName, playlistId, followCount, bgColor }) {
	const { data: playlist } = useGetOneSavedUserPlaylist(playlistId);
	const { data: song } = useGetSongs(
		playlist && playlist.playlist && playlist.playlist.songs && playlist.playlist.songs[0]
	);


	const isSongs = playlist && playlist.playlist && playlist.playlist.songs && playlist.playlist.songs.length < 1;


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
			style={{ backgroundColor: bgColor, backgroundImage: `url(${isSongs ? fallbackPlaceholderImage : bgImage && bgImage.url})` }}
		>
			<div className='follow'>
				<FollowBtn playlistId={playlistId} />
				<h3>{userName}</h3>
			</div>
			<Link className='link' to={`/playlist/${playlistId}`}>
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
