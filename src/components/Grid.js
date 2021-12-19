import React, { forwardRef, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Poster } from './Poster';
import { SlideButton } from './SlideButton';

const Section = styled.section`
  margin: 32px 32px 32px 32px;
  position: relative;
  overflow: hidden;
`;

const Title = styled.h1`
  margin: 12px 20px;
  font-size: 36px;
`;

const SlideContainer = styled.ul`
  margin: 10px 20px;
  display: flex;
  list-style: none;
  position: relative;
  transform: ${(props) => props.distance && `translateX(${props.distance}px)`};
`;

export const Grid = ({ title, info }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [slideDistance, setDistance] = useState(0);
  const slideRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleSlide = (direction) => {
    const SLIDE_END =
      slideRef.current.scrollWidth - slideRef.current.clientWidth;

    if (direction === 'prev') {
      slideDistance < 0 && setDistance(slideDistance + 200);
    } else {
      Math.abs(slideDistance) < SLIDE_END && setDistance(slideDistance - 200);
    }
  };

  useEffect(() => {
    console.dir(slideRef.current);
  }, [slideDistance]);

  return (
    <Section onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Title>{title}</Title>
      {isHovering && <SlideButton direction='prev' handleSlide={handleSlide} />}
      {isHovering && <SlideButton direction='next' handleSlide={handleSlide} />}
      <SlideContainer ref={slideRef} distance={slideDistance}>
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
