import React, { useContext } from 'react';
import { playerControllerStateContext } from '../../context/YouTubePlayerContext';
import { PLAYER_ACTIONS } from '../../reducers/YouTubePlayerReducer';

import styled from 'styled-components';
import { FiRepeat } from 'react-icons/fi';

function RepeatBtn() {
	const [{ repeatIsOn, shuffleIsOn }, dispatch] = useContext(playerControllerStateContext);

	function onClickHandler() {
		dispatch({ type: PLAYER_ACTIONS.SET_REPEAT_IS_ON });
        if (shuffleIsOn) {
            dispatch({type: PLAYER_ACTIONS.SET_SUFFLE_IS_ON})
        }

	}

	return (
		<RepeatBtnWrapper>
			<FiRepeat
				className={'shuffle-btn'}
				onClick={onClickHandler}
				style={{ color: `${repeatIsOn ? '#1dd1a1' : '#fff'}` }}
			/>
		</RepeatBtnWrapper>
	);
}

export default RepeatBtn;

const RepeatBtnWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	.shuffle-btn {
		margin: 0.8rem;
        margin-left: 0.3rem;
		color: #fff;
		&:hover {
			cursor: pointer;
			color: #1dd1a1;
		}
	}
`;
