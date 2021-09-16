import React from 'react';


import useLogoutUser from '../hooks/useLogoutUser';
import { Button } from '@material-ui/core';

function LogOutBtn() {
	const { mutate } = useLogoutUser();


	function onClickHandler() {
		mutate();
	}

	return (
		<div>
			<Button onClick={onClickHandler} variant='outlined' color='primary'>
				LOGOUT
			</Button>
		</div>
	);
}

export default LogOutBtn;
