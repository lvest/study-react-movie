import { useEffect, useState } from 'react';
import { movieApi } from '../api';
import { Grid } from '../components/Grid';

export const Movies = () => {
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setPopular(await movieApi.popular());
    setTopRated(await movieApi.topRated());
    setUpcoming(await movieApi.upcoming());
  }

  return (
    <>
      <Grid title='Popular' info={popular}></Grid>
      <Grid title='Top Rated' info={topRated}></Grid>
      <Grid title='Upcoming' info={upcoming}></Grid>
    </>
  );
};
