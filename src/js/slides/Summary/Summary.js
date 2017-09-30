import { h, render, cloneElement } from 'preact';
import Slide from '../../components/Slide';
import List from '../../components/List';

const Summary = () => {
    return (
        <Slide>
            <List>
                <li style={{ color: '#FAC863', fontWeight: 700 }}>
                    Play sounds
                </li>
                <li style={{ color: '#EC5f67', fontWeight: 700 }}>
                    Create sounds
                </li>
                <li style={{ color: '#6699CC', fontWeight: 700 }}>
                    Compose melodies and rhytms
                </li>
                <li style={{ color: '#F99157', fontWeight: 700 }}>
                    Add effects
                </li>
                <li style={{ color: '#C594C5', fontWeight: 700 }}>
                    Live audio
                </li>
            </List>
        </Slide>
    );
};

export default Summary;
