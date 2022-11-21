import React from 'react';
import CharacterItem from '../src/Modules/Home//Components/CharacterItem';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import renderer from 'react-test-renderer';

const character = {
    name: 'Homer Simpson',
    avatar: 'https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png/revision/latest/scale-to-width-down/300?cb=20201222215437',
    job: 'Nuclear Safety Inspector',
    description:
        "Homer Jay Simpson (born May 12, 1956) is the main protagonist and one of the five main characters of The Simpsons series (or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson. Homer is overweight (said to be ~240 pounds), lazy, and often ignorant to the world around him. Although Homer has many flaws, he has shown to have great caring, love, and even bravery to those he cares about and, sometimes, even others he doesn't. He also serves as the main protagonist of the The Simpsons Movie. He is 39 years old and was born in 1956.",
    id: '14',
};

describe('CharacterItem', () => {
    const initialState = {};
    const mockStore = configureStore();
    let store;

    it('Renders corrently', () => {
        store = mockStore(initialState);
        const instance = renderer.create(
            <Provider store={store}>
                <CharacterItem character={character} index={0} />
            </Provider>,
        );

        expect(instance.toJSON()).toMatchSnapshot();
    });
});
