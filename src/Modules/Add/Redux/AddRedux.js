import { createSlice } from '@reduxjs/toolkit';

export const AddSlice = createSlice({
    name: 'add',
    initialState: {
        loading: false,
        isSuccess: false,
    },
    reducers: {
        addCharacter: (state, action) => {
        },
        setIsLoading: (state, action) => {
            state.loading = action.payload.isLoading;
        },
        setIsSuccess: (state, action) => {
            state.isSuccess = action.payload.isSuccess;
        }
    },
});

export const AddSelectors = {
    isLoading: state => state[AddSlice.name].loading,
    isSuccess: state => state[AddSlice.name].isSuccess,
};
