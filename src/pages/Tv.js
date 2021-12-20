import { useEffect, useState } from 'react';
import { tvApi } from '../api';
import { Grid } from '../components/Grid';

export const Tv = () => {
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [airingToday, setAiringToday] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setPopular(await tvApi.popular());
    setTopRated(await tvApi.topRated());
    setAiringToday(await tvApi.airingToday());
  }

  return (
    <main>
      <Grid type='tv' title='Popular' info={popular} isSlide={true} />
      <Grid type='tv' title='Top Rated' info={topRated} isSlide={true} />
      <Grid type='tv' title='Airing Today' info={airingToday} isSlide={true} />
    </main>
  );
};
