import { React, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    // search bar with useState
    const [searchTerm, setSearchTerm] = useState('');
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // handle search logic here
        console.log(`Searching for ${searchTerm}...`);
    }
    // search button code above


    return (
        <nav className="nav">
            <Link to="/" className="site-title">
                PaTais CookBook
            </Link>
            <ul>
                <Link to='/home'>Home</Link>
                <Link to='/meals'>Meals</Link>
            </ul>

            {/* search button */}
            {/* <form onSubmit={handleSubmit}>
            <input type="text" value={searchTerm} onChange={handleChange} />
            <button type="submit">Search</button>
            </form> */}
        </nav>
    )
};

export default Navbar;
