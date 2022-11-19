import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import { persistStore, persistReducer } from 'redux-persist';
import persistConfig from './PersistConfig';

import Reducers from './Reducers';
import rootSaga from './Sagas';

const sagaMiddleware = createSagaMiddleware();
applyMiddleware(sagaMiddleware);

const persistedReducer = persistReducer(persistConfig, Reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
