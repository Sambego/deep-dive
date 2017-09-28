import { h, render, cloneElement } from 'preact';
import propTypes from 'proptypes';
import styles from './list.scss';

const List = ({ children }) => {
    const renderItems = () => {
        return children.map(child => {
            return cloneElement(child, {
                className: styles.item,
            });
        });
    };

    return <ul className={styles.list}>{renderItems()}</ul>;
};

List.propTypes = {
    children: propTypes.element.isRequired,
};

export default List;
