import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Movies } from '../pages/Movies';
import { Tv } from '../pages/Tv';
import { Search } from '../pages/Search';
import { Details } from '../pages/details/Details';
import { DetailTab } from '../pages/details/DetailTab';
import GlobalStyle from './GlobalStyle';
import Header from './Header';

export const Routers = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Movies />}></Route>
        <Route path='/movie/:id/*' element={<Details />}>
          <Route path='crew' element={<DetailTab />} />
          <Route path='cast' element={<DetailTab />} />
          <Route path='video' element={<DetailTab />} />
        </Route>
        <Route path='/tv' element={<Tv />}></Route>
        <Route path='/tv/:id/*' element={<Details />}>
          <Route path='crew' element={<DetailTab />} />
          <Route path='cast' element={<DetailTab />} />
          <Route path='video' element={<DetailTab />} />
        </Route>
        <Route path='/search' element={<Search />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
