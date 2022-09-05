import React from 'react';
import styles from './Navbar.module.css';
import logo from '../assets/sibir-logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={styles.navbarContainer}>
            <Link to="/" className={styles.logoContainer}>
                <img src={logo} alt="Sibir logo" />
            </Link>
        </div>
    )
}

export default Navbar;