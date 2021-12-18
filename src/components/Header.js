import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  height: 10vh;
  background: #494949;
  border-bottom: 5px solid black;
  margin-bottom: 20px;
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

const Slink = styled(Link)`
  all: unset;
`;

export default () => {
  return (
    <Header>
      <Ul>
        <Slink to='/'>
          <Li>Movie</Li>
        </Slink>
        <Slink to='/tv'>
          <Li>TV</Li>
        </Slink>
        <Slink to='/search'>
          <Li>Search</Li>
        </Slink>
      </Ul>
    </Header>
  );
};
