import { h, render, cloneElement } from 'preact';
import propTypes from 'proptypes';
import styles from './columns.scss';

const Columns = ({ children }) => {
    const renderColumns = () => {
        return children.map(child => {
            return cloneElement(child, {
                className: styles.column,
            });
        });
    };

    return <div className={styles.columns}>{renderColumns()}</div>;
};

Columns.propTypes = {
    children: propTypes.element.isRequired,
};

export default Columns;
