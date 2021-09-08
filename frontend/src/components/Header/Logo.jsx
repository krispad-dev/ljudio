import React from 'react';
import logo from '../../assets/logo.svg';
import styled from 'styled-components';

function Logo() {
	return (
		<LogoWrapper>
			<div className={'circle'}></div>
			<img src={logo} alt='' />
		</LogoWrapper>
	);
}

export default Logo;

const LogoWrapper = styled.div`
	position: relative;
`;
