import { h, render, cloneElement } from 'preact';
import Slide from '../../../components/Slide';
import Subtitle from '../../../components/Subtitle';
import Wave from '../../../components/Wave';
import Sound from '../../../components/Sound';

const Intro = () => {
    const audioContext = new AudioContext();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.frequency.value = 2000;
    oscillator.start();

    oscillator.connect(gain);

    const toggleVolume = () => {
        if (gain.gain.value === 1) {
            gain.gain.value = 0.2;
        } else {
            gain.gain.value = 1;
        }
    };

    return (
        <Slide>
            <Subtitle>Volume</Subtitle>
            <Wave
                context={audioContext}
                input={gain}
                color="#F99157"
                onClick={toggleVolume}
            />
        </Slide>
    );
};

export default Intro;
