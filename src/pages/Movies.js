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
    <main>
      <Grid type='movie' title='Popular' info={popular} isSlide={true}></Grid>
      <Grid
        type='movie'
        title='Top Rated'
        info={topRated}
        isSlide={true}
      ></Grid>
      <Grid type='movie' title='Upcoming' info={upcoming} isSlide={true}></Grid>
    </main>
  );
};
