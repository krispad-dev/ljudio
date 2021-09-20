import React, { useContext } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import SearchIcon from '@material-ui/icons/Search';
import { UiContext } from '../../context/UiState';
import { UI_STATE_ACTIONS } from '../../reducers/UiReducer';
import { Input, TextField } from '@material-ui/core';

function SearchBar() {
	const { dispatch } = useContext(UiContext);
	const { push } = useHistory();

	let timeout = 0;

	async function searchMusic(e) {
		push('/');

		let musicSearchString = e.target.value;

		// Delay function kommer lyftas ut till helpers.js
		if (timeout) clearTimeout(timeout);

		timeout = setTimeout(() => {
			dispatch({
				type: UI_STATE_ACTIONS.SET_HEADER_SEARCH_STRING,
				payload: { headerSearchString: musicSearchString },
			});
		}, 500);
	}

	return (
		<SearchBarWrapper>
			<Input className={'search-Input'} type={'text'} endAdornment={<SearchIcon />} onChange={searchMusic}>
				{' '}
			</Input>
		</SearchBarWrapper>
	);
}

const SearchBarWrapper = styled.div`
	.search-Input {
		border-radius: 0.5rem;
		width: auto;
		width: 15vw;
		min-width: 8rem;
		background-color: #eee;
		padding: 0.1rem 0.5rem;
	}
`;

export default SearchBar;
