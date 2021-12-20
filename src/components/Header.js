import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  height: 10vh;
  background: #494949;
  border-bottom: 5px solid black;
`;

const Ul = styled.ul`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Li = styled.li`
  font-size: 30px;
  list-style: none;
  color: white;
  padding: 30px;
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
