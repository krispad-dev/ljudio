import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';

import useCreatePlaylist from '../../../hooks/useCreatePlaylist';

export default function CreatePlaylist() {
	const [ textFieldInput, setTextFieldInput ] = useState('');
	const { mutate } = useCreatePlaylist();

	const savePlaylist = e => {
		e.preventDefault();
		if (textFieldInput.length === 0) {
			return;
		}
		mutate({ title: textFieldInput });
		setTextFieldInput('');
	};

	return (
		<CreatePalyListWrpapper>
			<form onSubmit={savePlaylist}>

				<TextField
					fullWidth={true}
					value={textFieldInput}
					onChange={e => setTextFieldInput(e.target.value)}
					size={'small'}
					variant={'filled'}
					color='primary'
					inputProps={{ maxLength: 14 }}
					maxLength={10}
					placeholder={'Add playlist...'}
				/>
								<AddIcon className='add-icon' onClick={savePlaylist} />
			</form>
		</CreatePalyListWrpapper>
	);
}

const CreatePalyListWrpapper = styled.div`
	background-color: rgba(255, 255, 255, 0.02);
	margin-bottom: 0.1rem;
	width: 100%;
	display: flex;

	flex-wrap: wrap;

	input,
	select,
	textarea {
		color: #fff;
		font-weight: 200;
		width: 100%;
	}

	form {
		width: 100%;
		display: flex;
		align-items: center;
	}

	.add-icon {
		color: #c4c4c4;
		cursor: pointer;
	}
`;
