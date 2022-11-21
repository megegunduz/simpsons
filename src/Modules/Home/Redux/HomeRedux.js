import { createSlice } from '@reduxjs/toolkit';
import { deleteCharacter, updateRanking } from '../Utils';

/** @typedef {import('../../../Types/Character').Character} Character */
/** @typedef {import('../../../Types/Character').CharacterList} CharacterList */

/**
 * @typedef {object} HomeState
 * @property {CharacterList} characters
 */

export const HomeSlice = createSlice({
    name: 'home',
    /** @type {HomeState} */
    initialState: {
        characters: [],
    },
    reducers: {
        fetchCharacters: () => {},
        /**
         * @param {HomeState} state
         * @param {{ type: string, payload: {characters: CharacterList}}} action
         */
        setCharacters: (state, action) => {
            state.characters = action.payload.characters;
        },
        /**
         * @param {HomeState} state
         * @param {{ type: string, payload: {character: Character}}} action
         */
        deleteCharacter: (state, action) => {
            state.characters = deleteCharacter({
                characters: state.characters,
                deletedCharacter: action.payload.character,
            });
        },
        /**
         * @param {HomeState} state
         * @param {{type: string, payload: {character: Character, updateType: 'increase' | 'decrease'}}} action
         */
        updateRanking: (state, action) => {
            state.characters = updateRanking({
                characters: state.characters,
                updatedCharacter: action.payload.character,
                updateType: action.payload.updateType,
            });
        },
    },
});

export const HomeSelectors = {
    /** @returns {CharacterList} */
    characters: state => state[HomeSlice.name].characters,
};
