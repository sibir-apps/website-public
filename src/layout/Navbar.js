import React from 'react';
import styles from './Navbar.module.css';
import logo from '../assets/sibir-logo.svg';
import { Link } from 'react-router-dom';

const MenuButton = ({ open, onClick }) => {
    return (
        <div className={`menu-icon ${open ? 'open' : ''}`} onClick={onClick} >
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

const Navbar = ({ onMenuClick, menuOpen }) => {
    return (
        <div className={styles.navbarContainer}>
            <Link to="/">
                <img src={logo} alt="Sibir logo" />
            </Link>
            <MenuButton open={menuOpen} onClick={onMenuClick} />
        </div>
    )
}

export default Navbar;