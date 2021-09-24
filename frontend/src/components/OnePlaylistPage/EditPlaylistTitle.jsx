import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { FaCheck, FaRegTimesCircle } from 'react-icons/fa';
import useChangePlaylistTitle from '../../hooks/useChangePlaylistTitle';
import styled from 'styled-components';

function EditPlaylistTitle({ title, setIsChanged, setIsEditingTitle, playlistId }) {
	const [value, setValue] = useState(title);
	const { mutate } = useChangePlaylistTitle();

	function confirmChange() {
		mutate({ title: value, playlistId });
		setIsChanged(true);
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
			/>
			<FaCheck
				onClick={confirmChange}
				style={{ color: '#FFF', marginTop: '0.5rem', marginLeft: '0.5rem', fontSize: '2rem' }}
			/>

			<FaRegTimesCircle
				onClick={() => setIsEditingTitle(false)}
				style={{ color: '#FFF', marginTop: '1rem', marginLeft: '0.5rem', fontSize: '2rem' }}
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
`;
