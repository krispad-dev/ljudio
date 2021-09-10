import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function MenuItem({ url, icon, text }) {
  return (
    <MenuItemWrapper>
      <Link to={url}>
        <h1>{icon}</h1>
        <h1>{text}</h1>
      </Link>
    </MenuItemWrapper>
  );
}

const MenuItemWrapper = styled.div`
  margin: 0.5rem 0rem 0.5rem 0.5rem;

  a {
    all: unset;
    cursor: pointer;
    align-items: center;
    display: flex;
    color: #c4c4c4;
    margin: 0;
  }

  a h1 {
    padding: 0.5rem;
  }
`;

export default MenuItem;
