import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Movies } from '../pages/Movies';
import { Tv } from '../pages/Tv';
import { Search } from '../pages/Search';
import { Details } from '../pages/Details';
import GlobalStyle from './GlobalStyle';
import Header from './Header';

export const Routers = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/react-movie' element={<Movies />}></Route>
        <Route path='/react-movie/movie/:id' element={<Details />}></Route>
        <Route path='/react-movie/tv' element={<Tv />}></Route>
        <Route path='/react-movie/tv/:id' element={<Details />}></Route>
        <Route path='/react-movie/search' element={<Search />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
