import { h, render, cloneElement } from 'preact';
import Slide from '../../../components/Slide';
import Image from '../../../components/Image';
import controller from '../../../../images/midi-contoller.jpg';

const MidiController = () => {
    return (
        <Slide>
            <Image
                src={controller}
                style={{
                    width: '100vw',
                    height: '100vh',
                    objectFit: 'cover',
                }}
                color="#C594C5"
            />
        </Slide>
    );
};

export default MidiController;
