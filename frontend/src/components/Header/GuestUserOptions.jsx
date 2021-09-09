import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function GuestUserOptions() {
	return (
		<GuestUserOptionsWrapper>
			<Link to='/register'>
				<Button variant='outlined' color='primary' href='#outlined-buttons'>
					REGISTER
				</Button>
			</Link>
			<Link to='/login'>
				<Button variant='outlined' color='primary' href='#outlined-buttons'>
					LOGIN
				</Button>
			</Link>
		</GuestUserOptionsWrapper>
	);
}

export default GuestUserOptions;

const GuestUserOptionsWrapper = styled.div`

a {
	margin: 0.2rem
}





`
