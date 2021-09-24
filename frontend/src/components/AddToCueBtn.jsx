import React, { useContext } from 'react';
import { BiAddToQueue } from 'react-icons/bi';
import { playerControllerStateContext } from '../context/YouTubePlayerContext';
import { PLAYER_ACTIONS } from '../reducers/YouTubePlayerReducer';
import useAddToCue from '../hooks/useAddToCue';
import styled from 'styled-components';


function AddToCueBtn({ videoId }) {

    const { mutate } = useAddToCue();
	const [ { pendingUserCue }, dispatch ] = useContext(playerControllerStateContext);

	function saveToCue() {

		dispatch({
			type: PLAYER_ACTIONS.SET_USER_PENDING_CUE,
			payload: [ ...pendingUserCue, videoId ]
		});

		mutate({ videoId });
	}
    
    return<AddToCueBtnWrapper> 
        <BiAddToQueue className="add-btn" onClick={saveToCue} />
    </AddToCueBtnWrapper>
}

export default AddToCueBtn;


const AddToCueBtnWrapper = styled.div`

    .add-btn {
		font-size: 1.5rem;
		margin-left: 1rem;
		color: #c4c4c4;

		&:hover {
			color: #1dd1a1;
			transition: ease-in-out 0.2s;
			cursor: pointer;
		}
	}

`;