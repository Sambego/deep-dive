import { h, render, cloneElement } from 'preact';
import Slide from '../../../components/Slide';
import Subtitle from '../../../components/Subtitle';
import Sound from '../../../components/Sound';
import Envelope from '../../../../images/envelope.png';

const Envelopes = () => {
    const audioContext = new AudioContext();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const attackTime = 1;
    const releaseTime = 1;
    const duration = 500;

    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    gain.gain.value = 0;
    oscillator.start();

    const playSound = () => {
        gain.gain.setValueAtTime(0, audioContext.currentTime);
        gain.gain.linearRampToValueAtTime(
            1,
            audioContext.currentTime + attackTime
        );

        // prettier-ignore
        window.setTimeout(() => {
            gain.gain.linearRampToValueAtTime(
                0,
                audioContext.currentTime + releaseTime
            );
        }, (attackTime * 1000) + duration);
    };

    return (
        <Slide>
            <Subtitle>Linear Envelopes</Subtitle>
            <Sound
                onClick={playSound}
                style={{
                    backgroundColor: '#EC5f67',
                    backgroundImage: `url(${Envelope})`,
                    backgroundSize: '8vh 5.5vh',
                }}
            />
        </Slide>
    );
};

export default Envelopes;
