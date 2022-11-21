import React from 'react';
import { MainNavigation } from './Navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './Redux/Store';
import { LoadingOverlay } from './Features/Loading';

const App = props => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <LoadingOverlay />
                <MainNavigation />
            </PersistGate>
        </Provider>
    );
};

export default App;
