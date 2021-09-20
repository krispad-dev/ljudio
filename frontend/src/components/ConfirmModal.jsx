import React, { useContext } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom'
import { UiContext } from '../context/UiState';
import { UI_STATE_ACTIONS } from '../reducers/UiReducer';
import { FaTimesCircle, FaCheckCircle } from 'react-icons/fa';


function ConfirmModal() {

    const { push } = useHistory();
    const { state, dispatch } = useContext(UiContext);

    function completeConfirm() {
        dispatch({ type: state.confirmAction });
        
        setTimeout(() => {
          push(state.pushDir);
        }, 200);
    }

    return (
        <ConfirmWrapper modalOpen={state.modalOpen}>
            <div className="content">
                <h4>{state.modalText}</h4><br />
                <div className="btns">
                    <FaCheckCircle onClick={completeConfirm} className="okey" /> 
                    <FaTimesCircle onClick={() => dispatch({ type: UI_STATE_ACTIONS.SET_MODAL_IS_CLOSED })} className="cancel" />
                </div>
            </div>
        </ConfirmWrapper>
    );
}

export default ConfirmModal;


const ConfirmWrapper = styled.div`

    width: 100%;
    height: 100vh;
    top: 0;
    position: fixed;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.89);
    display: ${props => props.modalOpen ? 'flex' : 'none'};
    justify-content: center;
    
    .content {
        background: #443e3e;
        width: 300px;
        height: 200px;
        padding: 2rem;
        margin: 10rem auto;
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    h4 {
        font: 1.5rem 'Roboto', sans-serif;
        color: #FFF;
    }
    
    .okey {
        font-size: 2rem;
        color: #FFF;

        &:hover {
            color: #2ecc71;
            cursor: pointer;
        }
    }
    
    .cancel {
        font-size: 2rem;
        margin-left: 1rem;
        color: #FFF;

        &:hover {
            color: #cc402e;
            cursor: pointer;
        }
    }

    @media (max-width: 480px) {
      .content {
        width: 70%;
      }
    }

`;
