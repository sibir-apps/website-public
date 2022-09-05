import React, { useState } from 'react';
import Menu from '../components/Menu';
import styles from './Layout.module.css';
import Navbar from './Navbar';

const MenuButton = ({ open, onClick }) => {
    return (
        <div className={`menu-icon ${open ? 'open' : ''}`} onClick={onClick} >
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

const Layout = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuMounted, setMenuMounted] = useState(false);

    const handleOnMenuClick = () => {
        if (menuOpen) {
            setMenuOpen(!menuOpen);
            setTimeout(() => {
                setMenuMounted(false);
            }, 300);
        }
        else {
            setMenuMounted(true);
            setTimeout(() => {
                setMenuOpen(true);
            }, 0);
        }
    }

    return (
        <>
            <MenuButton open={menuOpen} onClick={handleOnMenuClick} />
            <div className={styles.layoutContainer}>
                <Navbar />
                <div className={styles.pageContainer}>
                    {children}
                </div>
            </div>
            {menuMounted && (
                <Menu open={menuOpen} onClose={handleOnMenuClick} />
            )}
        </>
    );
}

export default Layout;