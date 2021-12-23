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
      <Carousel category='movie' title='Popular' info={popular}></Carousel>
      <Carousel category='movie' title='Top Rated' info={topRated}></Carousel>
      <Carousel category='movie' title='Upcoming' info={upcoming}></Carousel>
    </main>
  );
};
