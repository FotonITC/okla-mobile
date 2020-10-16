import 'react-native-gesture-handler';
import * as React from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import dishesReducer from './src/store/reducers/dishes';
import authReducer from './src/store/reducers/auth';

import RootNavigation from './src/screens/RootNavigation';

const rootReducer = combineReducers({
    dishes: dishesReducer,
    auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

function App() {
    return (
        <Provider store={store}>
            <RootNavigation/>
        </Provider>
    );
}

export default App;
