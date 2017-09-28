import { h, render, cloneElement } from 'preact';
import propTypes from 'proptypes';

const EnvelopesSchema = ({ src, style }) => {
    return <div dangerouslySetInnerHTML={{ __html: src }} style={style} />;
};

EnvelopesSchema.propTypes = {
    src: propTypes.element.isRequired,
    style: propTypes.object,
};

export default EnvelopesSchema;
