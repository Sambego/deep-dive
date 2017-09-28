import { h, render, cloneElement } from 'preact';
import propTypes from 'proptypes';
import styles from './sound.scss';

const Sound = ({ onClick, style }) => {
    return <button className={styles.sound} onClick={onClick} style={style} />;
};

Sound.propTypes = {
    onClick: propTypes.func.isRequired,
    style: propTypes.object,
};

export default Sound;
