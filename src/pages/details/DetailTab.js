import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { movieApi, tvApi } from '../../api';

export const DetailTab = () => {
  const { pathname } = useLocation();
  const [category, id, tabName] = pathname.split('/').slice(1);

  useEffect(() => {
    if (category === 'movie') {
      fetchMovieData();
    } else {
      fetchTvData();
    }
  }, [tabName]);

  async function fetchMovieData() {
    if (tabName === 'crew' || tabName === 'cast') {
      console.log(await movieApi.getCredit(id, tabName));
    } else {
      console.log(await movieApi.getVideos(id));
    }
  }

  async function fetchTvData() {
    if (tabName === 'crew' || tabName === 'cast') {
      console.log(await tvApi.getCredit(id, tabName));
    } else {
      console.log(await tvApi.getVideos(id));
    }
  }
  return `${tabName}`;
};
