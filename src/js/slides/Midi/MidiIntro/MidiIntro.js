import { h, render, cloneElement } from 'preact';
import Slide from '../../../components/Slide';
import Subtitle from '../../../components/Subtitle';

const MidiIntro = () => {
    return (
        <Slide>
            <Subtitle>
                What if we could control everything with hardware?
            </Subtitle>
        </Slide>
    );
};

export default MidiIntro;
