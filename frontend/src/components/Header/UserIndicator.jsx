import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import styled from 'styled-components';


function UserIndicator() {
	
	const { data } = useAuth();

	return (
		<UserIndicatorWrappe>
			<h4>{data && data.user && data.user.userName}</h4>
            <FaRegUserCircle style={{color: '#fff', fontSize: '1rem'}} />
		
		</UserIndicatorWrappe>
	);
}

export default UserIndicator;

const UserIndicatorWrappe = styled.div`
background-color: #111;
font-size: 1rem;

	display: flex;
	justify-content: flex-start;
	align-items: center;
    h4 {
        margin: 1rem;
    }
`;
