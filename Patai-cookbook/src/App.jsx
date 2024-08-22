import { useEffect, useState } from 'react';
import fetchData from './utils/fetchData';
import './App.css';
import MealBySearch from './components/MealBySearch';
import Navbar from './components/NavBar';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Meals from './components/Meals';

function App() {


  return (
    <>
    <Navbar/>
    <div className='container'>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/meals" element={<Meals />} />
      </Routes>
    </div>
      <MealBySearch />
    </>
  )
}

export default App
