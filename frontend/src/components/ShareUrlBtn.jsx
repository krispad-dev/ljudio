import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import { IoMdShare } from 'react-icons/io';
import Button from '@material-ui/core/Button';

function ShareUrlBtn({ iconFontSize }) {
  const copyUrl = () => {
    //Copies url to clipboard
    navigator.clipboard.writeText(window.location.href);

    //Toast notification with settings
    toast('Link Copied to clipboard!', {
      autoClose: 3000,
      closeButton: false,
      hideProgressBar: true,
      style: {
        color: 'white',
        backgroundColor: '#1dd1a1',
      },
    });
  };

  return (
    <ShareUrlBtnWrapper>
      <ToastContainer />
      <Button
        variant='outlined'
        color='primary'
        onClick={() => copyUrl()}
        endIcon={<IoMdShare style={{ fontSize: `${iconFontSize}` }} />}
      >
        Share
      </Button>
    </ShareUrlBtnWrapper>
  );
}

const ShareUrlBtnWrapper = styled.div`
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.2);
`;

export default ShareUrlBtn;
