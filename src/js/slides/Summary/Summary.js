import { h, render, cloneElement } from 'preact';
import Slide from '../../components/Slide';
import List from '../../components/List';

const Summary = () => {
    return (
        <Slide>
            <List>
                <li>Play sounds</li>
                <li>Create sounds</li>
                <li>Compose melodies and rhytms</li>
                <li>Alter sounds</li>
            </List>
        </Slide>
    );
};

export default Summary;
