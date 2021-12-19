import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const Button = styled.button`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: ${(props) => props.direction === 'prev' && `0px`};
  right: ${(props) => props.direction === 'next' && `0px`};
  z-index: 1;
  background-color: black;
  opacity: 0.8;
`;

export const SlideButton = ({ direction, handleSlide }) => {
  return (
    <Button direction={direction} onClick={() => handleSlide(direction)}>
      <FontAwesomeIcon
        icon={direction === 'prev' ? faChevronLeft : faChevronRight}
        color={'white'}
      />
    </Button>
  );
};
