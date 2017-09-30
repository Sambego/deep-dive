import { h, render, cloneElement } from 'preact';
import propTypes from 'proptypes';
import styles from './twitter.scss';

const Twitter = () => {
    return (
        <a
            href="https://www.twitter.com/sambego"
            className={styles.twitter}
            target="_blank"
        >
            Sambego
        </a>
    );
};

export default Twitter;
