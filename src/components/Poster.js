import React, { useState } from 'react';
import styled from 'styled-components';
import { Rating } from './Rating';
import { Link } from 'react-router-dom';

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

const StyleLink = styled(Link)`
  all: unset;
`;

export const Poster = ({ type, id, image, rating }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <StyleLink to={`/${type}/${id}`}>
      <PosterContainer>
        <Img
          src={'http://image.tmdb.org/t/p/original/' + image}
          onMouseOver={handleMouseEnter}
          onMouseOut={handleMouseLeave}
          onError={(event) =>
            (event.target.src =
              'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg')
          }
        ></Img>
        {isHovering && <Rating rating={rating}></Rating>}
      </PosterContainer>
    </StyleLink>
  );
};
