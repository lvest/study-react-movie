import React, { useState } from 'react';
import styled from 'styled-components';
import { Rating } from './Rating';

const PosterContainer = styled.div`
  display: inline;
  width: 200px;
  height: 300px;
  margin: 0 20px;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const Poster = ({ image, rating }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <PosterContainer>
      <Img
        src={'http://image.tmdb.org/t/p/original/' + image}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      ></Img>
      {isHovering && <Rating rating={rating}></Rating>}
    </PosterContainer>
  );
};
