import { useEffect, useState } from 'react';
import { movieApi, tvApi } from '../api';
import { Grid } from '../components/Grid';
import { SearchBar } from '../components/SearchBar';

export const Search = () => {
  const [movieList, setMovieList] = useState([]);
  const [tvList, setTvList] = useState([]);
  const [searchWord, setSearchWord] = useState('');

  useEffect(() => {
    fetchData();
  }, [searchWord]);

  async function fetchData() {
    if (!searchWord) return;
    setMovieList(await movieApi.getSearch(searchWord));
    setTvList(await tvApi.getSearch(searchWord));
  }

  const getSearchWord = (word) => {
    setSearchWord(word);
  };

  return (
    <main>
      <SearchBar getSearchWord={getSearchWord} />
      <Grid
        type='movie'
        title='Movie'
        info={movieList}
        isSearchInvalid={!searchWord && true}
      />
      <Grid
        type={'tv'}
        title='Tv'
        info={tvList}
        isSearchInvalid={!searchWord && true}
      />
    </main>
  );
};
