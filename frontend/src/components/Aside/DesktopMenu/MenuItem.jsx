import React, { useContext } from 'react';
import { UiContext } from '../../../context/UiState';
import { UI_STATE_ACTIONS } from '../../../reducers/UiReducer';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const activeStyles = {
	color: '#1dd1a1'
}

function MenuItem({ url, icon, text, active }) {

	const { state, dispatch } = useContext(UiContext);
	
	return (
		<MenuItemWrapper 
		onClick={() => dispatch({ type: UI_STATE_ACTIONS.SET_CLOSE_MENU_MOBILE })}
		style={active ? activeStyles : {}}
		
		>
			<Link to={url}>
				{active && <div className='marker'></div>}
				<h3 style={active ? activeStyles : {}} >{icon}</h3>
				<h3 style={active ? activeStyles : {}} >{text}</h3>
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
		&:hover {
			opacity: 80%;
			background-color: #222;
		}
		width: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		.marker {
			border-radius: 2px;
			animation: markerEffect ease-in-out 0.2s;
			@keyframes markerEffect {
				from {
					width: 0rem;
				} 
				to {
					width: 0.3rem;
				}
			}

			width: 0.3rem;
			height: 2rem;
			background-color: #1dd1a1;

		}
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
