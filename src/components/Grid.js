import React, { useState } from 'react';
import styled from 'styled-components';
import { Poster } from './Poster';
import { Rating } from './Rating';

const Title = styled.h1`
  margin: 0 20px;
`;

const Container = styled.div`
  margin: 10px 40px;
  display: inline-flex;
  overflow: hidden;
  //display: grid;
  //grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

export const Grid = ({ title, info }) => {
  return (
    <section>
      <Title>{title}</Title>
      <Container>
        {info.map((movie) => {
          return (
            <Poster
              image={movie.poster_path}
              rating={movie.vote_average}
            ></Poster>
          );
        })}
      </Container>
    </section>
  );
};
