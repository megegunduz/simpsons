import { all } from 'redux-saga/effects';
import { HomeSagas } from '../Modules/Home';
import { AddSagas } from '../Modules/Add';

export default function* rootSaga() {
    yield all([
        ...HomeSagas, //
        ...AddSagas,
    ]);
}
