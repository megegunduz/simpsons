import { combineReducers } from '@reduxjs/toolkit';
import { HomeSlice } from '../Modules/Home';
import { AddSlice } from '../Modules/Add';
import { LoadingSlice, InitialLoadingSlice } from '../Features/Loading';

export default combineReducers({
    [HomeSlice.name]: HomeSlice.reducer,
    [AddSlice.name]: AddSlice.reducer,
    [LoadingSlice.name]: LoadingSlice.reducer,
    [InitialLoadingSlice.name]: InitialLoadingSlice.reducer,
});
