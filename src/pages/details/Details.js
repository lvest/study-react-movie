import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import { movieApi, tvApi } from '../../api';
import { Information } from '../../components/Information';

export const Details = () => {
  const [details, setDetails] = useState(null);
  const { id } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    if (pathname.startsWith('/movie')) {
      await movieApi.getDetails(id).then((data) => {
        setDetails({
          backdropPath: data.backdrop_path,
          posterPath: data.poster_path,
          title: data.original_title,
          releaseDate: data.release_date,
          runtime: data.runtime,
          genres: data.genres.map((obj) => `${obj.name} `),
          homeLink: data.homepage,
          language: data.original_language,
          summary: data.overview,
        });
      });
    } else {
      await tvApi.getDetails(id).then((data) => {
        setDetails({
          backdropPath: data.backdrop_path,
          posterPath: data.poster_path,
          title: data.original_name,
          releaseDate: data.last_air_date,
          runtime: data.episode_run_time,
          genres: data.genres.map((obj) => `${obj.name} `),
          homeLink: data.homepage,
          language: data.original_language,
          summary: data.overview,
        });
      });
    }
  }
  return <Information info={details}></Information>;
};
