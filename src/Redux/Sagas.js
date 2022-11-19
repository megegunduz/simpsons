import { all } from 'redux-saga/effects';
import { HomeSagas } from '../Modules/Home';

export default function* rootSaga() {
    yield all([
        ...HomeSagas, //
    ]);
}
