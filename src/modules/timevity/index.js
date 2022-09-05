import React from 'react'
import Container from '../../components/Container';
import { theme } from '../../constants/theme.constants';
import styles from './index.module.css';
import timevityLogo from '../../assets/timevity-logo.svg';
import timevityLogoMd from '../../assets/timevity-logo-md.svg';
import useMediaQuery from '../../hooks/useMediaQuery';

const TimevityPage = () => {
    const isMobile = useMediaQuery('(max-width: 767.98px)');

    return (
        <>
            <Container background={theme.pureWhite}>
                <div className={styles.container}>
                    <h3 className="section-title">TIMEVITY APP</h3>
                    <p className="paragraph">Timevity is a personal time tracker to keep your performance and productivity at its best. Get it in the <a href="https://apps.apple.com/app/timevity/id1610670575" className={styles.link}>Apple Store</a>.</p>

                    <div className={styles.spacer}></div>

                    <h3 className="section-title">PRIVACY POLICY</h3>
                    <p className="paragraph">Timevity doesn’t collect any user data or statistics. Also, Sibir development team will not sell or rent any personal information supplied by his customers, except as may be required by law. This includes contact information, such as names, emails, addresses or anything that you share during support interaction.</p>
                </div>
            </Container>
            <span className="page-divider"></span>
            <Container background={theme.numbGray} isImageContainer={true}>
                <img src={isMobile ? timevityLogoMd : timevityLogo} alt="Timevity logo" />
            </Container>
        </>
    )
}

export default TimevityPage;