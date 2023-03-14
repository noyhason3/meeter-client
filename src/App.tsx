import React from 'react';
import './App.scss';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Homepage } from './pages/Homepage/Homepage';


export const App = () => {

  return (
    <section className="App">
      <Homepage />
    </section>
  );
}

