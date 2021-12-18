import React, { useState } from 'react';
import styled from 'styled-components';
import { Rating } from './Rating';

const PosterContainer = styled.li`
  margin-right: 10px;
  position: relative;
`;

const Img = styled.img`
  height: 300px;
  width: 200px;
  margin-bottom: 5px;
  border-radius: 5px;

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
