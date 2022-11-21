import { call, fork, put, select, takeEvery } from 'redux-saga/effects';
import { InitialLoadingSlice } from '../../../Features/Loading';
import { fetchCharacters } from '../Services/fetchCharacters';
import { HomeSelectors, HomeSlice } from './HomeRedux';

function* watchInitialLoading() {
    yield takeEvery(
        InitialLoadingSlice.actions.runInitialJobs,
        workerFetchCharacters,
    );
}

function* watchFetchCharacters() {
    yield takeEvery(HomeSlice.actions.fetchCharacters, workerFetchCharacters);
}

function* workerFetchCharacters() {
    const characters = yield select(HomeSelectors.characters);

    // Fetch data if character list in device storage is empty
    if (characters?.length === 0) {
        try {
            const data = yield call(fetchCharacters);
            yield put(HomeSlice.actions.setCharacters({ characters: data }));
        } catch (e) {}
    }
}

export const sagas = [
    fork(watchFetchCharacters), //
    fork(watchInitialLoading),
];
