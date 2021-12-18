import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Movies } from '../pages/Movies';
import { Search } from '../pages/Search';
import { Tv } from '../pages/Tv';
import GlobalStyle from './GlobalStyle';
import Header from './Header';

export const Routers = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Movies />}></Route>
        <Route path='/tv' element={<Tv />}></Route>
        <Route path='/search' element={<Search />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
