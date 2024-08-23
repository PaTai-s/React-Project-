import { useEffect, useState } from 'react';
import fetchData from './utils/fetchData';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar';

import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Meals from './components/Meals';
import MealCard from './components/MealCard';
import CollectionOfMeals from './components/CollectionOfMeals';

import Home from './components/Home';
import Meals from './components/Meals';
import SelectedMeals from './components/SelectedMeals';
import MealBySearch from './components/MealBySearch';



function App() {


  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/meals" element={<Meals />} />
        </Routes>
      </div>

    <Navbar/>
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meals" element={<Meals />} />
        <Route path="/recipe/:idMeal" element={<SelectedMeals />} />
      </Routes>
    </div>

      <MealBySearch />
      <CollectionOfMeals />

    </>
  )
}

export default App
