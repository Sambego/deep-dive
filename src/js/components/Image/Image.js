import { h, render, cloneElement } from 'preact';
import propTypes from 'proptypes';
import classnames from 'classnames';
import styles from './image.scss';

const Image = ({ children, src, style, color }) => {
    const classes = classnames(styles.image, {
        [styles.overlay]: color,
    });

    return (
        <div
            style={{
                ...style,
                backgroundImage: `url(${src})`,
                backgroundColor: color,
            }}
            className={classes}
        />
    );
};

Image.propTypes = {
    children: propTypes.element.isRequired,
    src: propTypes.string.isRequired,
};

export default Image;
