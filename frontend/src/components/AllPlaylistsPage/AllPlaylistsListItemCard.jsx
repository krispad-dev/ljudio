import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import FollowBtn from '../FollowBtn';

function AllPlaylistsListItemCard({ title, username, id }) {
	return (
		<AllPlaylistsListItemCardWrapper>
			<div>
				<Link to={`/playlists/${id}`}>
					<div
						className='bg-image'
						style={{
							backgroundImage: `url(https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)`,
						}}
					></div>
				</Link>
			</div>

			<div className='info-container'>
				<div>
					<h2>{title}</h2>
					<h4>By:{username}</h4>
				</div>

				<FollowBtn />
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
