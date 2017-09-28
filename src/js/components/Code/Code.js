import { h, render, cloneElement } from 'preact';
import propTypes from 'proptypes';
import Prism from 'prismjs';
import styles from './code.scss';
import './prism.css';

const Code = ({ code, lang }) => {
    return (
        <div className={styles.code}>
            <header className={styles.header}>
                <span className={styles.red} />
                <span className={styles.yellow} />
                <span className={styles.green} />
            </header>
            <div class={styles.snippet}>
                <pre>
                    <code
                        dangerouslySetInnerHTML={{
                            __html: Prism.highlight(code, Prism.languages[lang]),
                        }}
                    />
                </pre>
            </div>
        </div>
    );
};

Code.propTypes = {
    children: propTypes.string.isRequired,
};

Code.defaultProps = {
    lang: 'javascript',
};

export default Code;
