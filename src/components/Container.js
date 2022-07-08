import React from 'react';
import styles from './Container.module.css';

const Container = ({ background, children }) => {
    return (
        <div className={styles.genericContainer} style={{ background }}>
            {children}
        </div>
    )
}

export default Container;