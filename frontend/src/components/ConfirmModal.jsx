import React, { useContext, useRef } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { UiContext } from '../context/UiState';
import { UI_STATE_ACTIONS } from '../reducers/UiReducer';
import { FaTimesCircle, FaCheckCircle } from 'react-icons/fa';
import useOutsideClick from '../hooks/uiHooks/useOutsideClick';

function ConfirmModal() {
  const { push } = useHistory();
  const { state, dispatch } = useContext(UiContext);
  const ref = useRef();

  useOutsideClick(ref, (e) => {
    if (state.modalOpen) {
      dispatch({
        type: UI_STATE_ACTIONS.SET_MODAL_IS_CLOSED,
        payload: { modalOpen: false },
      });
    }
  });

  function completeConfirm() {
    dispatch({ type: state.confirmAction });

    setTimeout(() => {
      push(state.pushDir);
    }, 200);
  }

  return (
    <ConfirmWrapper ref={ref} modalOpen={state.modalOpen}>
      <div className='content'>
        <h4>{state.modalText}</h4>
        <br />
        <div className='btns'>
          <FaCheckCircle onClick={completeConfirm} className='okey' />
          <FaTimesCircle onClick={() => dispatch({ type: UI_STATE_ACTIONS.SET_MODAL_IS_CLOSED })} className='cancel' />
        </div>
      </div>
    </ConfirmWrapper>
  );
}

export default ConfirmModal;

const ConfirmWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;

  width: 100%;
  height: 100vh;
  top: 0;
  position: fixed;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.89);
  display: ${(props) => (props.modalOpen ? 'flex' : 'none')};
  justify-content: center;

  .content {
    pointer-events: visible;
    background: #333;
    opacity: 90%;
    width: 30%;
    height: 20vh;
    padding: 2rem;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h4 {
    font: 1.5rem 'Roboto', sans-serif;
    font-weight: 200;
    color: #fff;
  }

  .okey {
    font-size: 2rem;
    color: #fff;

    &:hover {
      color: #2ecc71;
      cursor: pointer;
      transition: ease-in-out 0.2s;
    }
  }

  .cancel {
    font-size: 2rem;
    margin-left: 1rem;
    color: #fff;

    &:hover {
      color: #db1234;
      cursor: pointer;
      transition: ease-in-out 0.2s;
    }
  }

  @media (max-width: 480px) {
    .content {
      width: 70%;
    }
  }
`;
