import React from 'react';

import styled from 'styled-components';
import { IoMdShare } from 'react-icons/io';
import Button from '@material-ui/core/Button';
import toastMessage from '../helpers/toasts';

function ShareUrlBtn({ iconFontSize }) {
  const copyUrl = () => {
    //Copies url to clipboard
    navigator.clipboard.writeText(window.location.href);

    toastMessage('Link Copied!');
  };

  return (
    <ShareUrlBtnWrapper>
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
`;

export default ShareUrlBtn;
