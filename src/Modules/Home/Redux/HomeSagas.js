import { call, fork, put, takeEvery } from 'redux-saga/effects';
import { fetchCharacters } from '../Services/fetchCharacters';
import { HomeSlice } from './HomeRedux';

function* watchFetchCharacters() {
    yield takeEvery(HomeSlice.actions.fetchCharacters, workerFetchCharacters);
}

function* workerFetchCharacters() {
    console.log('IN WORKER')
    try {
        const data = yield call(fetchCharacters);
        yield put(HomeSlice.actions.setCharacters({ characters: data }));
    } catch (e) {
        console.log(e);
    }
}

export const sagas = [
    fork(watchFetchCharacters), //
];
