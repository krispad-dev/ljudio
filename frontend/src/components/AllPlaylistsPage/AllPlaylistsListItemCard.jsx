import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import FollowBtn from '../FollowBtn';




function AllPlaylistsListItemCard({ title, userName, playlistId }) {



	return (
		<AllPlaylistsListItemCardWrapper>
			<div>
				<Link to={`/playlist/${playlistId}`}>
					<div
						className='bg-image'
						style={{
							backgroundImage: `url(https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&=crop&w=1050&q=80)`,
						}}
					></div>
				</Link>
			</div>

			<div className='info-container'>
				<div>
					<h2>{title}</h2>
					<h4>By: &nbsp; {userName}</h4>
				</div>

				<FollowBtn playlistId={playlistId} />
			</div>
		</AllPlaylistsListItemCardWrapper>
	);
}

export default AllPlaylistsListItemCard;

const AllPlaylistsListItemCardWrapper = styled.div`
	display: flex;
	flex-direction: column;

	.info-container {
		display: flex;
		justify-content: space-between;
        align-items: flex-start;
	}
	.bg-image {
		border-radius: 2px ;
		height: 10rem;
		width: auto;
		background-position: cenetr;
		background-size: cover;
		&:hover {
			transform: scale(1.02);
			opacity: 60%;
			cursor: pointer;
		}
	}
`;
