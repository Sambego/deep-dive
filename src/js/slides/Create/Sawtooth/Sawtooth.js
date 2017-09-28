import { h, render, cloneElement } from 'preact';
import Slide from '../../../components/Slide';
import Subtitle from '../../../components/Subtitle';
import Wave from '../../../components/Wave';

const Sawtooth = () => {
    const audioContext = new AudioContext();
    const oscillator = audioContext.createOscillator();

    oscillator.type = 'sawtooth';
    oscillator.frequency.value = 1000;
    oscillator.start();

    return (
        <Slide>
            <Subtitle>Sawtooth wave</Subtitle>
            <Wave context={audioContext} input={oscillator} />
        </Slide>
    );
};

export default Sawtooth;
