import { h, render, cloneElement } from 'preact';
import propTypes from 'proptypes';
import styles from './title.scss';

const Title = ({ children }) => {
    return <h1 className={styles.title}>{children}</h1>;
};

Title.propTypes = {
    children: propTypes.element.isRequired,
};

export default Title;
