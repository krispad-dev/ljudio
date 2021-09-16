import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import styled from 'styled-components';


function UserIndicator() {
	
	const { data } = useAuth();

	return (
		<UserIndicatorWrappe>
			<h4>{data && data.user && data.user.userName}</h4>
            <FaRegUserCircle style={{color: '#202a5d', fontSize: '1.2rem'}} />
		
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
        margin: 1rem;
    }
`;
