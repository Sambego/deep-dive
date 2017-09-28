import { h, render, cloneElement } from 'preact';
import Slide from '../../components/Slide';
import Title from '../../components/Title';
import Volume from '../../components/Volume';

const TitleSlide = () => {
    return (
        <Slide>
            <Title>Web Audio</Title>
            <Volume />
        </Slide>
    );
};

export default TitleSlide;
