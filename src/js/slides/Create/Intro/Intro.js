import { h, render, cloneElement } from 'preact';
import Slide from '../../../components/Slide';
import Columns from '../../../components/Columns';
import Subtitle from '../../../components/Subtitle';
import Image from '../../../components/Image';
import Create from '../../../../images/create.jpg';

const Intro = () => {
    return (
        <Slide>
            <Columns>
                <Image
                    src={Create}
                    style={{
                        width: window.innerWidth / 2,
                        height: window.innerHeight,
                    }}
                    color="#EC5f67"
                />
                <div>
                    <Subtitle>Create Sounds</Subtitle>
                </div>
            </Columns>
        </Slide>
    );
};

export default Intro;
