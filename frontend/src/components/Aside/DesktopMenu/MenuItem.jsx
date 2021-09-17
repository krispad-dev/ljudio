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
  width: 100%;
  margin: 0.5rem 0rem 0.5rem 0.5rem;

  a {
    cursor: pointer;
    align-items: center;
    display: flex;
    margin: 0;
  }

  a h1 {
    padding: 0.5rem;
    color: #c4c4c4;
  }
`;

export default MenuItem;
