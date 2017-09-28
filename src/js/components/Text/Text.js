import { h, render, cloneElement } from 'preact';
import propTypes from 'proptypes';
import styles from './text.scss';

const Text = ({ children }) => {
    return <p className={styles.text}>{children}</p>;
};

Text.propTypes = {
    children: propTypes.element.isRequired,
};

export default Text;
