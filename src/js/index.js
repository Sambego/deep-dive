import '../scss/styles.scss';

import { h, render } from 'preact';
import Router from 'preact-router';
import Deck from './components/Deck';
import Title from './slides/Title';
import About from './slides/About';
import Summary from './slides/Summary';
import PlayIntro from './slides/Play/Intro';
import PlayTag from './slides/Play/Tag';
import PlayFetch from './slides/Play/Fetch';
import PlayBuffer from './slides/Play/Buffer';
import PlaySkip from './slides/Play/Skip';
import CreateIntro from './slides/Create/Intro';
import CreateOscillator from './slides/Create/Oscillator';
import CreateOscillatorCode from './slides/Create/OscillatorCode';
import CreateOscillatorTypes from './slides/Create/OscillatorTypes';
import CreateOscillatorTypesCode from './slides/Create/OscillatorTypesCode';
import CreateSine from './slides/Create/Sine';
import CreateTriangle from './slides/Create/Triangle';
import CreateSquare from './slides/Create/Square';
import CreateSawtooth from './slides/Create/Sawtooth';
import CreateFrequency from './slides/Create/Frequency';
import CreateEnvelopesSchema from './slides/Create/EnvelopesSchema';
import CreateEnvelopes from './slides/Create/Envelopes';
import CreateEnvelopesCode from './slides/Create/EnvelopesCode';
import CreateEnvelopesFrequency from './slides/Create/EnvelopesFrequency';
import CreateEnvelopesCodeRelease from './slides/Create/EnvelopesCodeRelease';
import CreateEnvelopesCodeFrequency from './slides/Create/EnvelopesCodeFrequency';
import CreateEnvelopesExponential from './slides/Create/EnvelopesExponential';
import CreateEnvelopesSchemaExponential from './slides/Create/EnvelopesSchemaExponential';
import CreateEnvelopesCodeExponential from './slides/Create/EnvelopesCodeExponential';
import ComposeIntro from './slides/Compose/Intro';
import ComposeSimple from './slides/Compose/Simple';
import EffectsIntro from './slides/Effects/Intro';

render(
    <Deck>
        <Title />
        <About />
        <Summary />
        <PlayIntro />
        <PlayTag />
        <PlayFetch />
        <PlayBuffer />
        <PlaySkip />
        <CreateIntro />
        <CreateOscillator />
        <CreateOscillatorCode />
        <CreateOscillatorTypes />
        <CreateOscillatorTypesCode />
        <CreateSine />
        <CreateTriangle />
        <CreateSquare />
        <CreateSawtooth />
        <CreateFrequency />
        <CreateEnvelopesSchema />
        <CreateEnvelopes />
        <CreateEnvelopesCode />
        <CreateEnvelopesCodeRelease />
        <CreateEnvelopesFrequency />
        <CreateEnvelopesCodeFrequency />
        <CreateEnvelopesSchemaExponential />
        <CreateEnvelopesExponential />
        <CreateEnvelopesCodeExponential />
        <ComposeIntro />
        <ComposeSimple />
        <EffectsIntro />
    </Deck>,
    document.body
);
