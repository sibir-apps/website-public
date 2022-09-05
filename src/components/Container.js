import React from 'react';
import styles from './Container.module.css';

const Container = ({ background, children, isImageContainer }) => {
    return (
        <div className={`${styles.genericContainer} ${isImageContainer ? styles.imageContainer : ''}`} style={{ background }}>
            {children}
        </div>
    )
}

export default Container;