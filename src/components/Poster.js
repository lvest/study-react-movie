import React, { useState } from 'react';
import styled from 'styled-components';
import { Rating } from './Rating';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

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

export const Poster = ({ id, image, rating }) => {
  const [isHovering, setIsHovering] = useState(false);
  const { pathname } = useLocation(); // currentPath 받아옴

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  // Poster 컴포넌트에서 각 영화의 id를 받아서 주소를 만듦
  // Poster 컴포넌트 누르면 이동하니까 여기에 Link 생성

  return (
    <StyleLink to={`${pathname === '/' ? '/movie' : pathname}/${id}`}>
      <PosterContainer>
        <Img
          src={'http://image.tmdb.org/t/p/original/' + image}
          onMouseOver={handleMouseEnter}
          onMouseOut={handleMouseLeave}
        ></Img>
        {isHovering && <Rating rating={rating}></Rating>}
      </PosterContainer>
    </StyleLink>
  );
};
