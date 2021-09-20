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
				<div className={'logo-container'}>
					<Logo />
				</div>

				<div className={'search-bar-user-options-container'}>
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

	width: 100%;
  .search-bar-user-options-container {
				display: flex;
				justify-content: center;
				align-items: center;
			}


	.header-container {
		width: 99%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100% div {
			display: flex;
			justify-content: center;
			align-items: center;
		}
		@media only screen and (max-width: 648px) {
			flex-direction: column;
			width: 100%;
			.search-bar-user-options-container {
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}

	@media only screen and (max-width: 648px) {
		flex-direction: column;
		.logo-container {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			margin: 1rem;
		}
	}
`;
