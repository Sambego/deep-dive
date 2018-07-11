import { h, render, cloneElement } from 'preact';
import { Distortion } from 'audio-effects';
import Slide from '../../../components/Slide';
import Subtitle from '../../../components/Subtitle';
import Sound from '../../../components/Sound';

const DistortionPreview = () => {
    const audioContext = new AudioContext();
    const oscillator = audioContext.createOscillator();
    const oscillator2 = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const gain2 = audioContext.createGain();
    const distortion = new Distortion(audioContext);

    oscillator.frequency.value = 100;
    oscillator.start();
    gain.gain.value = 0;
    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    oscillator2.frequency.value = 100;
    oscillator2.start();
    gain2.gain.value = 0;
    oscillator2.connect(distortion.node);
    distortion.connect(gain2);
    gain2.connect(audioContext.destination);

    const play1 = () => {
        gain.gain.value = 1;

        window.setTimeout(() => {
            gain.gain.value = 0;
        }, 1000);
    };

    const play2 = () => {
        gain2.gain.value = 1;

        window.setTimeout(() => {
            gain2.gain.value = 0;
        }, 1000);
    };

    return (
        <Slide>
            <Subtitle>Distortion</Subtitle>
            <div>
                <Sound onClick={play1} style={{ backgroundColor: '#F99157' }} />
                <Sound onClick={play2} style={{ backgroundColor: '#F99157' }} />
            </div>
        </Slide>
    );
};

export default DistortionPreview;
