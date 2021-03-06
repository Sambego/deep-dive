import { h, render, cloneElement } from 'preact';
import Slide from '../../../components/Slide';
import Subtitle from '../../../components/Subtitle';
import Wave from '../../../components/Wave';

const Sine = () => {
    const audioContext = new AudioContext();
    const oscillator = audioContext.createOscillator();

    oscillator.frequency.value = 1000;
    oscillator.start();

    return (
        <Slide>
            <Subtitle>Sine wave</Subtitle>
            <Wave context={audioContext} input={oscillator} />
        </Slide>
    );
};

export default Sine;
