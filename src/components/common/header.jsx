import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom'
import { LogOut } from 'lucide-react';
import '../../styles/header.css'

const Header = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate("/login");
    }
    return (
        <>
            <header className='header'>

                {/* logo */}
                <NavLink to="/home" className="header-logo">
                    <img src='/public/images/logo-img.png' alt='logo' />
                </NavLink>

                {/* nav */}
                <nav className='header-nav'>
                    <ul className='nav-list'>
                        <li><NavLink to="/home">Home</NavLink></li>
                        <li><NavLink to="/recipe">Recipe</NavLink></li>
                        <li><NavLink to="/ingredient">Ingredient</NavLink></li>
                        <li><NavLink to="/plan">Meal Schedule</NavLink></li>
                        <li><NavLink to="/shopping">Shopping</NavLink></li>
                        <li><NavLink to="/profile">Profile</NavLink></li>
                    </ul>
                </nav>

                <div className="nav-logout">
                    <button className='logout-btn'
                        onClick={handleLogout}>
                        <LogOut color='#595ef5ff' />
                        <span>Logout</span>
                    </button>
                </div>

            </header>


        </>
    )
}

export default Header


