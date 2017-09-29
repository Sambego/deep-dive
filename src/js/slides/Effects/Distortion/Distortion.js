import { h, render, cloneElement } from 'preact';
import { Distortion } from 'audio-effects';
import Slide from '../../../components/Slide';
import Subtitle from '../../../components/Subtitle';
import Wave from '../../../components/Wave';
import Sound from '../../../components/Sound';

const EffectDistortion = () => {
    const audioContext = new AudioContext();
    const oscillator = audioContext.createOscillator();
    const distortion = new Distortion(audioContext);

    oscillator.frequency.value = 300;
    oscillator.start();

    oscillator.connect(distortion.node);

    return (
        <Slide>
            <Subtitle>Distortion</Subtitle>
            <Wave
                context={audioContext}
                input={distortion.output}
                color="#F99157"
            />
        </Slide>
    );
};

export default EffectDistortion;
