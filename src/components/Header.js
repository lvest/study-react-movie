import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  width: 100vw;
  height: 8vh;
  background: #2d2827;
  border-bottom: 5px solid black;
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
`;

const Ul = styled.ul`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Li = styled.li`
  margin-left: 10px;
  font-size: 30px;
  list-style: none;
  color: white;
  &:hover {
    background: pink;
    cursor: pointer;
  }
`;

const StyleLink = styled(Link)`
  all: unset;
`;

export default () => {
  return (
    <Header>
      <Ul>
        <StyleLink to='/'>
          <Li>Movie</Li>
        </StyleLink>
        <StyleLink to='/tv'>
          <Li>TV</Li>
        </StyleLink>
        <StyleLink to='/search'>
          <Li>Search</Li>
        </StyleLink>
      </Ul>
    </Header>
  );
};
