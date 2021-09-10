import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useLogoutUser from '../../hooks/useLogoutUser';

function LoggedInUserOptions() {
	const { mutate } = useLogoutUser();

	return (
		<LoggedInUserOptionsWrapper>
			<Button onClick={() => mutate()} variant='outlined' color='primary'>
				LOGOUT
			</Button>
		</LoggedInUserOptionsWrapper>
	);
}

export default LoggedInUserOptions;

const LoggedInUserOptionsWrapper = styled.div``;
