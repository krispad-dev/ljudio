import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function MenuItem({ url, icon, text }) {
	return (
		<MenuItemWrapper>
			<Link to={url}>
				<h1>{icon}</h1>
				<h1>{text}</h1>
			</Link>
		</MenuItemWrapper>
	);
}

const MenuItemWrapper = styled.div`
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

	a h1 {
		padding: 0.5rem;
		color: #eee;
		font-weight: 400;
	}
`;

export default MenuItem;
