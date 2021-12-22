import React from 'react';
import styled from 'styled-components';
import { Poster } from './Poster';

const Section = styled.section`
  padding: 2% 1%;
  position: relative;
  overflow: hidden;
  background-color: #2d2827;
`;

const Title = styled.h1`
  margin: 12px 20px;
  font-size: 36px;
  color: whitesmoke;
`;

const Container = styled.ul`
  margin: 10px 20px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const Grid = ({ category, title, info, isSearchInvalid }) => {
  return (
    <Section>
      <Title>{title}</Title>
      {!isSearchInvalid && (
        <Container>
          {info.map((movie) => {
            return (
              <Poster
                category={category}
                id={movie.id}
                image={movie.poster_path}
                rating={movie.vote_average}
              ></Poster>
            );
          })}
        </Container>
      )}
    </Section>
  );
};
