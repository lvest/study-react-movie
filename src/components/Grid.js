import React from 'react';
import styled from 'styled-components';
import { Poster } from './Poster';

const Title = styled.h1`
  margin: 0 20px;
`;
const Container = styled.div`
  margin: 10px 40px;
  display: flex;
  //display: grid;
  //grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  overflow: hidden;
`;

export const Grid = ({ title, info }) => {
  return (
    <div>
      <Title>{title}</Title>
      <Container>
        {info.map((movie) => {
          return <Poster image={movie.poster_path}></Poster>;
        })}
      </Container>
    </div>
  );
};
