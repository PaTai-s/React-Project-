import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar';
import Home from './components/Home';
import Meals from './components/Meals';
import SelectedMeals from './components/SelectedMeals';
import CollectionOfMeals from './components/CollectionOfMeals';
import SearchResults from './components/SearchResults';
import MealDetails from './components/MealDetails';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meals" element={<Meals />} />
          <Route path="/recipe/:idMeal" element={<SelectedMeals />} />
          <Route path="/search/:query" element={<SearchResults />} />
          <Route path="/meal-details/:idMeal" element={<MealDetails />} />
        </Routes>
      </div>
      <CollectionOfMeals />


    </>
  )
}

export default App
