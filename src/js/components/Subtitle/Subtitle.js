import { h, render, cloneElement } from 'preact';
import propTypes from 'proptypes';
import styles from './subtitle.scss';

const Subtitle = ({ children }) => {
    return <h2 className={styles.subtitle}>{children}</h2>;
};

Subtitle.propTypes = {
    children: propTypes.element.isRequired,
};

export default Subtitle;
