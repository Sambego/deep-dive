import { h, render } from 'preact';
import Slide from '../../components/Slide';
import Image from '../../components/Image';
import Devtools from '../../../images/devtools.png';

const DevtoolsImage = () => {
    return (
        <Slide>
            <Image
                src={Devtools}
                style={{
                    width: '70vw',
                    height: '80vh',
                    backgroundColor: 'transparent',
                }}
            />
        </Slide>
    );
};

export default DevtoolsImage;
