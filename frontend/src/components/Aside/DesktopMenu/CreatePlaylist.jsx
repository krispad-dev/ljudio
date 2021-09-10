import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import styled from 'styled-components';

import useCreatePlaylist from '../../../hooks/useCreatePlaylist'

export default function CreatePlaylist() {

	const [ textFieldInput, setTextFieldInput]  = useState('');
	const { mutate } = useCreatePlaylist()

	return (
		<CreatePlayListWrapapper>
			<TextField
				value={textFieldInput}
				onChange={e => setTextFieldInput(e.target.value)}
				size={'small'}
				variant={'filled'}
				color='primary'
				placeholder={'title'}
				style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
			/>

			<Button onClick={() => mutate({ title: textFieldInput })} size={'small'} color={'primary'}>
				SAVE
			</Button>
		</CreatePlayListWrapapper>
	);
}

const CreatePlayListWrapapper = styled.div`
	display: flex;
	width: 100%;
	input,
	select,
	textarea {
		color: #fff;
		font-weight: 200;
		height: 1rem;
	}
`;
