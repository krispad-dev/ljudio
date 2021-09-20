import React, { useContext } from 'react';
import { UiContext } from '../../../context/UiState';
import { UI_STATE_ACTIONS } from '../../../reducers/UiReducer';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function MenuItem({ url, icon, text }) {
	const { state, dispatch } = useContext(UiContext);
	return (
		<MenuItemWrapper onClick={() => dispatch({ type: UI_STATE_ACTIONS.SET_CLOSE_MENU_MOBILE })}>
			<Link to={url}>
				<h3>{icon}</h3>
				<h3>{text}</h3>
			</Link>
		</MenuItemWrapper>
	);
}

const MenuItemWrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	&:hover {
		background-color: #111;
		opacity: 80%;
		transition: 0.1s ease-in-out;
	}
	width: 100%;

	a {
		cursor: pointer;
		align-items: center;
		display: flex;
		margin: 0;
	}

	a h3 {
		padding: 0.5rem 0.2rem;
		color: #ddd;
		font-weight: 200;
	}
`;

export default MenuItem;
