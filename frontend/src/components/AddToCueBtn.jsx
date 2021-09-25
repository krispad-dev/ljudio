import React, { useContext } from 'react';
import { BiAddToQueue } from 'react-icons/bi';
import { playerControllerStateContext } from '../context/YouTubePlayerContext';
import { PLAYER_ACTIONS } from '../reducers/YouTubePlayerReducer';
import useAddToCue from '../hooks/useAddToCue';
import styled from 'styled-components';

import toastMessage from '../helpers/toasts';
import { ToastContainer } from 'react-toastify';

function AddToCueBtn({ videoId }) {


    const { mutate } = useAddToCue();
	const [ { pendingUserCue, activeCue, cuePosition }, dispatch ] = useContext(playerControllerStateContext);
	console.log(cuePosition);



	function saveToCue() {
		activeCue.splice(cuePosition + 1, 0, videoId)
/* 
		dispatch({
			type: PLAYER_ACTIONS.SET_ACTIVE_CUE,
			payload: activeCue.splice(cuePosition, 0, videoId)
		});
 */
/* 		mutate({ videoId }); */
	}
    
    return(
	<AddToCueBtnWrapper> 
        <BiAddToQueue className="add-btn" onClick={saveToCue} />
    </AddToCueBtnWrapper>
  );
}

export default AddToCueBtn;

const AddToCueBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;

  .add-btn {
    font-size: 1.5rem;
    color: #c4c4c4;

    &:hover {
      color: #1dd1a1;
      transition: ease-in-out 0.2s;
      cursor: pointer;
    }
  }
`;
