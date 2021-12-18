import styled from 'styled-components';
import { Poster } from './Poster';

const Section = styled.section`
  margin: 32px 20px;
`;

const Title = styled.h1`
  margin: 12px 20px;
  font-size: 36px;
`;

const SlideContainer = styled.ul`
  margin: 10px 40px;
  display: flex;
  overflow: hidden;
  list-style: none;
`;

export const Grid = ({ title, info }) => {
  return (
    <Section>
      <Title>{title}</Title>
      <SlideContainer>
        {info.map((movie) => {
          return (
            <Poster
              image={movie.poster_path}
              rating={movie.vote_average}
            ></Poster>
          );
        })}
      </SlideContainer>
    </Section>
  );
};
