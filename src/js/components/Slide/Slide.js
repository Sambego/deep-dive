import { h, render, cloneElement } from 'preact';
import propTypes from 'proptypes';
import styles from './slide.scss';

const Slide = ({ children }) => {
    return <div className={styles.slide}>{children}</div>;
};

Slide.propTypes = {
    children: propTypes.element.isRequired,
};

export default Slide;
