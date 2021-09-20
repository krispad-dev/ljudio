import React from 'react';
import PlayListCardItem from './PlayListCardItem';
import styled from 'styled-components';
import useGetFollowedPlaylists from '../../../hooks/useGetFollowedPlaylists';

function FollowedPlaylists() {
	// PLACEHOLDER HERE WILL WE INMPORT DATA WITH React query

	const { data } = useGetFollowedPlaylists();

	return (
		<FollowingPlayListWrapper>
			{data &&
				data.followedPlaylists &&
				data.followedPlaylists.length > 0 &&
				data.followedPlaylists.map(playlist => {
					return <PlayListCardItem key={playlist.id} {...playlist} followItem={true} />;
				})}
			{data && data.followedPlaylists && data.followedPlaylists.length === 0 && <p>No followed lists yet =/</p>}
		</FollowingPlayListWrapper>
	);
}

const FollowingPlayListWrapper = styled.ul`
	animation: dropDown ease-in-out 0.2s;
	@keyframes dropDown {
		from {
			height: 0%;
		}

		to {
			height: 100%;
		}
	}

	height: 100%;
	::-webkit-scrollbar {
		display: none;
	}
	overflow-y: scroll;
	color: #c4c4c4;
	margin-bottom: 10px;
	width: 100%;
`;

export default FollowedPlaylists;
