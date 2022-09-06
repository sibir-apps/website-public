import React, { useEffect, useState } from 'react'
import Container from '../../components/Container';
import { theme } from '../../constants/theme.constants';
import styles from './index.module.css';
import sibirLogoMd from '../../assets/sibir-logo-md.svg';
import sibirLogoXl from '../../assets/sibir-logo-xl.svg';
import useMediaQuery from '../../hooks/useMediaQuery';

const ContactPage = () => {
    const isMobile = useMediaQuery('(max-width: 767.98px)');

    const [showImg, setShowImg] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowImg(true);
        }, 100);

        return () => {
            clearTimeout(timeout);
        }
    }, []);

    return (
        <>
            <Container background={theme.pureWhite}>
                <div className={styles.container}>
                    <h3 className="section-title">CONTACT</h3>
                    <p className="paragraph">To have support of our products, please contact us <a href="mailto:sibir.contact@gmail.com" className={styles.link}>here</a>.</p>
                </div>
            </Container>
            <span className="page-divider"></span>
            <Container background={theme.numbGray} isImageContainer={true}>
                <img className={showImg ? 'fadeIn' : 'hidden'} src={isMobile ? sibirLogoMd : sibirLogoXl} alt="Sibir logo" />
            </Container>
        </>
    )
}

export default ContactPage;