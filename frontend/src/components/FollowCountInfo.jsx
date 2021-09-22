import React from 'react';
import styled from 'styled-components';
import { AiOutlineUser } from 'react-icons/ai';

function FollowCountInfo({ text }) {
	return (
		<FollowCountInfoWrapper>
			<AiOutlineUser />
			<h2>{text}</h2>
		</FollowCountInfoWrapper>
	);
}

export default FollowCountInfo;

const FollowCountInfoWrapper = styled.div`
	display: flex;
	justify-content: center;
    width: 50%;
	align-items: center;
    background-color: rgba(0,0,0,0.3);
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 2px ;
    margin: 1rem;

	h2 {
        margin-left: 0.3rem;
		font-weight: 400;
	}
`;
