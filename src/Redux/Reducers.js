import { combineReducers } from '@reduxjs/toolkit';
import { HomeSlice } from '../Modules/Home';

export default combineReducers({
    [HomeSlice.name]: HomeSlice.reducer,
});
