import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { FaCheck, FaRegTimesCircle } from 'react-icons/fa';
import useChangePlaylistTitle from '../../hooks/useChangePlaylistTitle';
import styled from 'styled-components';


function EditPlaylistTitle({ title, setIsEditingTitle, playlistId }) {
	const [value, setValue] = useState(title);
	const { mutate } = useChangePlaylistTitle();

	function confirmChange() {
		mutate({ title: value, playlistId });
		setIsEditingTitle(false);
	}

	return (
		<EditPlaylistTitleWrapper>
			<h4>{title}</h4>
			<TextField
				defaultValue={value}
				onChange={e => setValue(e.target.value)}
				size={'small'}
				variant={'filled'}
				color='primary'
				placeholder='New title:'
				inputProps={{ maxLength: 14 }}
			/>
			<FaCheck
				onClick={confirmChange}
				className="check"
			/>

			<FaRegTimesCircle
				onClick={() => setIsEditingTitle(false)}
				className="close"
			/>
		</EditPlaylistTitleWrapper>
	);
}

export default EditPlaylistTitle;

const EditPlaylistTitleWrapper = styled.div`
	transition: ease-in-out 1s;
	margin: 1rem;

	input {
		color: #fff;
		font-size: 1.2rem;

		::placeholder {
			color: #fff;
		}
	}

	.check {
		font-size: 2rem;
		color: #FFF;
		margin: 0.5rem;
	}

	.close {
		font-size: 2rem;
		color: #FFF;
	}

	@media (max-width: 400px) {
		.check, .close {
			font-size: 3rem;
			margin: 0.3rem;
		}

		input {
			width: 100%;
		
		}
	}
`;
