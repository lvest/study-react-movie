import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const RatingContainer = styled.div`
  width: 25%;
  display: flex;
  position: absolute;
  bottom: 16px;
  right: 24px;
`;

const MovieRating = styled.span`
  margin-left: 5px;
  color: white;
  font-weight: bold;
`;

export const Rating = ({ rating }) => {
  return (
    <RatingContainer>
      <FontAwesomeIcon icon={faStar} color={'yellow'} />
      <MovieRating>{`${rating}/10`}</MovieRating>
    </RatingContainer>
  );
};
