import { h, render, cloneElement } from 'preact';
import Slide from '../../../components/Slide';
import Subtitle from '../../../components/Subtitle';
import Wave from '../../../components/Wave';

const Square = () => {
    const audioContext = new AudioContext();
    const oscillator = audioContext.createOscillator();

    oscillator.type = 'square';
    oscillator.frequency.value = 1000;
    oscillator.start();

    return (
        <Slide>
            <Subtitle>Square wave</Subtitle>
            <Wave context={audioContext} input={oscillator} />
        </Slide>
    );
};

export default Square;
