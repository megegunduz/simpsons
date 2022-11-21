import { createSlice } from '@reduxjs/toolkit';

export const InitialLoadingSlice = createSlice({
    name: 'initial-loading',
    initialState: {
        isInitialLoadingComplete: false,
        awaitedJobsCount: 0,
    },
    reducers: {
        runInitialJobs: () => {},
        addToAwaitedJobs: () => {},
        removeFromAwaitedJobs: () => {},
    },
});

export const InitialLoadingSelectors = {
    isInitialLoadingComplete: state => state[InitialLoadingSlice.name].isInitialLoadingComplete,
    awaitedJobsCount: state => state[InitialLoadingSlice.name].awaitedJobsCount,
};
