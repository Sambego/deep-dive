import { h, render, cloneElement } from 'preact';
import Slide from '../../../components/Slide';
import Subtitle from '../../../components/Subtitle';
import Sound from '../../../components/Sound';
import Envelope from '../../../../images/envelope.png';

const EnvelopesExponential = () => {
    const audioContext = new AudioContext();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const attackTime = 3;
    const releaseTime = 1;
    const duration = 500;

    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    gain.gain.value = 0;
    oscillator.start();

    const playSound = () => {
        gain.gain.setValueAtTime(0.001, audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(
            1,
            audioContext.currentTime + attackTime
        );

        // prettier-ignore
        window.setTimeout(() => {
            gain.gain.exponentialRampToValueAtTime(
                0.001,
                audioContext.currentTime + releaseTime
            );
        }, (attackTime * 1000) + duration);
    };

    return (
        <Slide>
            <Subtitle>Exponential Envelopes</Subtitle>
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

export default EnvelopesExponential;
