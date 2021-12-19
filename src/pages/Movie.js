import React from 'react';
import { useLocation, useParams } from 'react-router';

/* 로직 정리 */
// Poster 컴포넌트에서 각 영화의 id를 받아서 주소를 만듦
// Movie 컴포넌트에선 params(id)를 받아서 해당하는 상세 페이지 출력

export const Movie = () => {
  const { id } = useParams();

  return 'Movie';
};
