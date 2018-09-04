import { h, render, cloneElement } from 'preact';
import Slide from '../../../components/Slide';
import Image from '../../../components/Image';
import pedalboard from '../../../../images/pedalboard.jpg';

const Pedalboard = () => {
    return (
        <Slide>
            <Image
                src={pedalboard}
                style={{
                    width: '100vw',
                    height: '100vh',
                    objectFit: 'cover',
                }}
                color="#F99157"
            />
        </Slide>
    );
};

export default Pedalboard;
