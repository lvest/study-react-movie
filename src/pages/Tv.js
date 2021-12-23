import { useEffect, useState } from 'react';
import { tvApi } from '../api';
import { Carousel } from '../components/Carousel';

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
      <Carousel category='tv' title='Popular' info={popular}></Carousel>
      <Carousel category='tv' title='Top Rated' info={topRated}></Carousel>
      <Carousel
        category='tv'
        title='Airing Today'
        info={airingToday}
      ></Carousel>
    </main>
  );
};
