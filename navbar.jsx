import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                Home
            </NavLink>
            <NavLink to="/new" className={({ isActive }) => (isActive ? 'active' : '')}>
                Nieuwe Post
            </NavLink>
            <NavLink to="/overview" className={({ isActive }) => (isActive ? 'active' : '')}>
                Overzicht
            </NavLink>
        </nav>
    );
}
