import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import MainComponent from './MainComponent';
import configureStore from '../src/redux/store';

const initialState = {
    barList: [],
};

const store = configureStore(initialState);

render(
    <Provider store={store}>
        <MainComponent />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();

