import { createSlice } from '@reduxjs/toolkit';

export const HomeSlice = createSlice({
    name: 'home',
    initialState: {
        characters: [],
    },
    reducers: {
        fetchCharacters: () => {},
        setCharacters: (state, action) => {
            state.characters = action.payload.characters;
        },
    },
});

export const HomeSelectors = {
    characters: state => state[HomeSlice.name].characters,
};
