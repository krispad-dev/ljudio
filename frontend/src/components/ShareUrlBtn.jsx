import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import { IoMdShare } from 'react-icons/io';

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
        color: '#2ecc71',
      },
    });
  };

  return (
    <shareUrlBtbWrapper>
      <ToastContainer />
      <IoMdShare style={{ color: 'white', fontSize: `${iconFontSize}` }} onClick={() => copyUrl()} />
    </shareUrlBtbWrapper>
  );
}

export default ShareUrlBtn;

const shareUrlBtbWrapper = styled.div``;
