import { useEffect, useState } from 'react';
import { movieApi } from '../api';
import { Carousel } from '../components/Carousel';

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
      <Carousel type='movie' title='Popular' info={popular}></Carousel>
      <Carousel type='movie' title='Top Rated' info={topRated}></Carousel>
      <Carousel type='movie' title='Upcoming' info={upcoming}></Carousel>
    </main>
  );
};
