import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 200px;
  height: 300px;
  margin: 10px;
`;

export const Poster = ({ image }) => {
  return <Img src={'http://image.tmdb.org/t/p/original/' + image}></Img>;
};
