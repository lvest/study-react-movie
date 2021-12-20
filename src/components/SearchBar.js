import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  all: unset;
  margin: 20px;
  padding: 2px 4px;
  background-color: #2d2827;
  color: whitesmoke;
  font-size: 32px;
  border-bottom: 3px solid whitesmoke;
`;

export const SearchBar = ({ getSearchWord }) => {
  return (
    <Input
      placeholder='Please enter a search word.'
      onChange={(event) => getSearchWord(event.target.value)}
    ></Input>
  );
};
