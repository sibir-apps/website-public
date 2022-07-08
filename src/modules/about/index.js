import React from 'react'
import Container from '../../components/Container';
import { theme } from '../../constants/theme.constants';
import styles from './index.module.css';
import sibirLogoXl from '../../assets/sibir-logo-xl.svg';

const AboutPage = () => {
    return (
        <>
            <Container background={theme.pureWhite}>
                <div className={styles.container}>
                    <h3 className="section-title">ABOUT</h3>
                    <p className="paragraph">Sibir is a small team specialized in the development  of customized mobile and web products.</p>
                    <p className="paragraph">Our mission is to bring precise and robust solutions for users that are looking for new approaches of what is already in the market.</p>
                    <p className="paragraph">From planning, designing and implementing with the best technology, we care about users and build scalable tools for them.</p>
                </div>
            </Container>
            <span className="page-divider"></span>
            <Container background={theme.numbGray}>
                <img src={sibirLogoXl} alt="Sibir logo" />
            </Container>
        </>
    )
}

export default AboutPage;