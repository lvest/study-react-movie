import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
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
      <Grid type='tv' title='Popular' info={popular} />
      <Grid type='tv' title='Top Rated' info={topRated} />
      <Grid type='tv' title='Airing Today' info={airingToday} />
    </main>
  );
};
