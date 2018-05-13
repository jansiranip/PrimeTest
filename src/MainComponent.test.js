
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MainComponent from './MainComponent';
import configureStore from './redux/store';

const initialState = {
    barList: [],
};

const store = configureStore(initialState);


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Provider store={store}>
            <MainComponent />
        </Provider>, div);
});
