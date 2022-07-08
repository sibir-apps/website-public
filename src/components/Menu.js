import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Menu.module.css';

const Menu = ({ open, onClose }) => {
    const navigate = useNavigate();

    const handleItemClick = (item) => {
        onClose();
        navigate(item);
    }

    return (
        <div className={`menu-container ${open ? 'active' : ''}`}>
            <div className={styles.itemContainer}>
                <h1 className={styles.item} onClick={() => handleItemClick('about')}>About</h1>
                <h1 className={styles.item} onClick={() => handleItemClick('timevity')}>Our work</h1>
                <h1 className={styles.item} onClick={() => handleItemClick('contact')}>Contact</h1>
            </div>
        </div>
    )
}

export default Menu;