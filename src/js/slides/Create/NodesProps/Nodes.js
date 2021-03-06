import { h, render, cloneElement } from 'preact';
import Slide from '../../../components/Slide';
import Subtitle from '../../../components/Subtitle';
import Icon from '../../../components/Icon';
import Schema from '../../../../images/audio-prop.svg';

const Nodes = () => {
    return (
        <Slide>
            <Subtitle>Connecting nodes and properties</Subtitle>
            <Icon src={Schema} style={{ width: '80vw' }} />
        </Slide>
    );
};

export default Nodes;
