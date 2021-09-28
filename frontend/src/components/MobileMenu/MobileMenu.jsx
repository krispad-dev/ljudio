import React, { useContext } from 'react';
import { UiContext } from '../../context/UiState';
import styled from 'styled-components';
import DesktopMenu from '../Aside/DesktopMenu/DesktopMenu';

function MobileMenu() {
	const { state } = useContext(UiContext);

	return (
		<MobileMenuContainer
			style={{
				animation: `${
					state.mobileMenuIsOpen ? 'slideIn 0.2s ease-in-out forwards' : 'slideOut 0.2s ease-in-out forwards'
				}`,
			}}
		>
			<DesktopMenu />
		</MobileMenuContainer>
	);
}

export default MobileMenu;

const MobileMenuContainer = styled.div`
	z-index: 999;
	display: flex;
	position: absolute;
	background-color: #000;
	width: 50vw;
	height: 100vh;

	@keyframes slideIn {
		0% {
			transform: translateX(100vw);
		}

		100% {
			transform: translateX(0vw);
		}
	}

	@keyframes slideOut {
		0% {
			transform: translateX(0vw);
		}

		100% {
			transform: translateX(100vw);
		}
	}

	@media only screen and (max-width: 1000px) {
		width: 100vw;
	}


	position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
`;
