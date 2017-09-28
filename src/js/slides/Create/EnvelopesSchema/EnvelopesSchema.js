import { h, render, cloneElement } from 'preact';
import Slide from '../../../components/Slide';
import Subtitle from '../../../components/Subtitle';
import Icon from '../../../components/Icon';
import Schema from '../../../../images/envelope-schema.svg';

const EnvelopesSchema = () => {
    return (
        <Slide>
            <Subtitle>Linear Envelopes</Subtitle>
            <Icon src={Schema} style={{ width: '50vw' }} />
        </Slide>
    );
};

export default EnvelopesSchema;
