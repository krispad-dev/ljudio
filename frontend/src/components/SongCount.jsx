import React from 'react';
import styled from 'styled-components';
import { RiFileMusicLine } from 'react-icons/ri'

function SongCount({ text }) {
	return (
		<SongCountWrapper>
			<RiFileMusicLine style={{color: '#eee'}}/>
			<h2>{text}</h2>
		</SongCountWrapper>
	);
}

export default SongCount;

const SongCountWrapper = styled.div`
	display: flex;
	justify-content: center;
    width: 50%;
	align-items: center;


    border-radius: 2px ;
    margin: 1rem;

	h2 {
        margin-left: 0.3rem;
		font-weight: 400;
		color: #eee;
	}
`;
