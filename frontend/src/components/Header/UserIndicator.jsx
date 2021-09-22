import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import styled from 'styled-components';

function UserIndicator() {
	const { data } = useAuth();

	return (
		<UserIndicatorWrappe>
			<FaRegUserCircle style={{ color: '#eee', fontSize: '1rem', marginLeft: '0.2rem' }} />
			<h4>{data && data.user && data.user.userName}</h4>
		</UserIndicatorWrappe>
	);
}

export default UserIndicator;

const UserIndicatorWrappe = styled.div`
	background-color: #222;
	font-size: 1rem;

	display: flex;
	justify-content: flex-start;
	align-items: center;
	h4 {
		color: #eee;
		margin: 1rem;
		font-weight: 400;
	}
`;
