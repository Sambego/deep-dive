import { h, render, cloneElement } from 'preact';
import Slide from '../../../components/Slide';
import Subtitle from '../../../components/Subtitle';
import Icon from '../../../components/Icon';
import Schema from '../../../../images/delay.svg';

const DelaySchema = () => {
    return (
        <Slide>
            <Subtitle>Delay</Subtitle>
            <Icon src={Schema} style={{ width: '50vw' }} />
        </Slide>
    );
};

export default DelaySchema;
