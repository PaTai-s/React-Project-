import { useEffect, useState } from 'react';
import fetchData from './utils/fetchData';
import './App.css';
import Navbar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Meals from './components/Meals';
import CollectionOfMeals from './components/CollectionOfMeals';
import Home from './components/Home';
import SelectedMeals from './components/SelectedMeals';
import MealBySearch from './components/MealBySearch';



function App() {


  return (
    <>
      <Navbar />
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
