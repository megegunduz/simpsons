import { delay, fork, put, select, takeEvery } from 'redux-saga/effects';
import { AddSlice } from './AddRedux';
import { HomeSelectors, HomeSlice } from '../../Home';
import { addCharacter } from '../Utils';

function* watchAddCharacter() {
    yield takeEvery(AddSlice.actions.addCharacter, workerAddCharacter);
}

function* workerAddCharacter(action) {
    const characters = yield select(HomeSelectors.characters);
    const { character } = action.payload;

    yield put(AddSlice.actions.setIsLoading({ isLoading: true }));
    try {
        // Dummy delay to imitate waiting for a response
        const newCharacters = yield delay(1500, addCharacter({ characters, character }));

        yield put(HomeSlice.actions.setCharacters({ characters: newCharacters }));
        yield put(AddSlice.actions.setIsSuccess({ isSuccess: true }));
    } catch (error) {
    } finally {
        yield put(AddSlice.actions.setIsLoading({ isLoading: false }));
    }
}

export const AddSagas = [
    fork(watchAddCharacter), //
];
