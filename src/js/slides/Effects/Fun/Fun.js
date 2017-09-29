import { h, render } from 'preact';
import Slide from '../../../components/Slide';
import Image from '../../../components/Image';
import Remote from '../../../../images/remote.png';

const Fun = () => {
    return (
        <Slide>
            <Image
                src={Remote}
                style={{
                    width: '80vw',
                    height: '80vh',
                }}
            />
        </Slide>
    );
};

export default Fun;
