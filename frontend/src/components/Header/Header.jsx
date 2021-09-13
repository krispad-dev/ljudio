import React from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import useAuth from '../../hooks/useAuth';
import styled from 'styled-components';

import GuestUserOptions from './GuestUserOptions';
import LoggedInUserOptions from './LoggedInUserOptions';

function Header() {
	const { data: auth } = useAuth();

	return (
		<StyledHeader>
			<div className='header-container'>
				<Logo />
				<div>
					<SearchBar />
					{auth && !auth.loggedIn && <GuestUserOptions />}
					{auth && auth.loggedIn && <LoggedInUserOptions />}
				</div>
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

		div {
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
`;
