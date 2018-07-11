import { h, render, cloneElement } from 'preact';
import Slide from '../../components/Slide';
import Columns from '../../components/Columns';
import Image from '../../components/Image';
import Subtitle from '../../components/Subtitle';
import List from '../../components/List';
import Conf from '../../../images/conf.jpg';

const ConfIntro = () => {
    return (
        <Slide>
            <Image
                src={Conf}
                style={{
                    width: '100vw',
                    height: '100vh',
                    objectFit: 'contain',
                    objectPosition: 'center',
                }}
            />
        </Slide>
    );
};

export default ConfIntro;
