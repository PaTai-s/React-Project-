import { React, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import MealContext from "../Context /MealContext";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    // search bar with useState
    const [query, setSearch] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        navigate(`/search/${query}`);
    };
    // search button code above


    return (
        <nav className="nav">
            <Link to="/" className="site-title">
                PaTais CookBook
            </Link>
            <ul className='nav-bar-options'>
                <Link to='/'>Home</Link>
                <Link to='/meals'>Meals</Link>
            </ul>

            {/* search button */}
            <form onSubmit={handleSubmit}>
                <label htmlFor="MealSearch">Search for a recipe </label>
                <input
                    type="text"
                    id="MealSearchNav"
                    value={query}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </nav>
    )
};

export default Navbar;