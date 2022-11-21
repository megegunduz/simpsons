import { createSlice } from '@reduxjs/toolkit';

export const LoadingSlice = createSlice({
    name: 'loading',
    initialState: {
        awaitedJobs: [],
        isOverlayVisible: false,
    },
    reducers: {
        addToAwaitedJobs: (state, action) => {
            const jobs = [...state.awaitedJobs];
            jobs.push(action.payload);
            state.awaitedJobs = jobs;
        },
        removeFromAwaitedJobs: (state, action) => {
            const jobs = [...state.awaitedJobs];
            const index = jobs.indexOf(action.payload);
            index > -1 && jobs.splice(index, 1);
            state.awaitedJobs = jobs;
        },
        setOverlayVisibility: (state, action) => {},
    },
});

export const LoadingSelectors = {
    awaitedJobs: state => state[LoadingSlice.name].awaitedJobs,
    isOverlayVisible: state => state[LoadingSlice.name].isOverlayVisible,
};
