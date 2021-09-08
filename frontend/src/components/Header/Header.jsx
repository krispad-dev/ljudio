import React from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import useAuth from '../../hooks/useAuth';
import GuestOptions from './GuestOptions';
import styled from 'styled-components';

function Header() {
	const { data: auth } = useAuth();

	return (
		<StyledHeader>
			<div className='header-container'>
				<Logo />
				<SearchBar />
				<GuestOptions />
			</div>
		</StyledHeader>
	);
}

export default Header;

const StyledHeader = styled.header`
	display: flex;
	justify-content: center;

	.header-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 95%;
	}
`;
