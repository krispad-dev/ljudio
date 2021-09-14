import React from 'react';
import AllPlaylistsListItemCard from './AllPlaylistsListItemCard';
import styled from 'styled-components';
/* import useGetAllPlaylists from '../../hooksuseGetAllPlaylists.js' */

const mockData = [
	{
		title: 'Skojfrisk',
		username: 'KalleKula',
	},
	{
		title: 'Rock',
		username: 'KalleKula',
	},
	{
		title: 'SmoothJazz',
		username: 'KalleKula',
	},
	{
		title: 'Creepy',
		username: 'Roger',
	},
	{
		title: 'Soul',
		username: 'Erik',
	},
    {
		title: 'Skojfrisk',
		username: 'KalleKula',
	},
	{
		title: 'Rock',
		username: 'KalleKula',
	},
	{
		title: 'SmoothJazz',
		username: 'KalleKula',
	},
	{
		title: 'Creepy',
		username: 'Roger',
	},
	{
		title: 'Soul',
		username: 'Erik',
	},
    {
		title: 'Skojfrisk',
		username: 'KalleKula',
	},
	{
		title: 'Rock',
		username: 'KalleKula',
	},
	{
		title: 'SmoothJazz',
		username: 'KalleKula',
	},
	{
		title: 'Creepy',
		username: 'Roger',
	},
	{
		title: 'Soul',
		username: 'Erik',
	},
];

function AllPlaylistsList() {
/* 
    const { data } = useGetAllPlaylists() */
	return (
		<AllPlaylistsListWrapper>

			{mockData.map((playlist) => <AllPlaylistsListItemCard {...playlist} /> )}

		</AllPlaylistsListWrapper>
	);
}

export default AllPlaylistsList;


const AllPlaylistsListWrapper = styled.div`

::-webkit-scrollbar {
		display: none;
	}
	overflow-y: scroll;
	width: 100%;
	display: grid;
	gap: 0.5rem;
	grid-template-columns: 15vw 15vw  15vw  15vw ;





`