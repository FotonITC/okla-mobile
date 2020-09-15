import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import dishesReducer from './src/store/reducers/dishes';

import DetailsScreen from './src/screens/DetailsScreen';
import HomeScreen from './src/screens/HomeScreen';

const rootReducer = combineReducers({
    dishes: dishesReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const Stack = createStackNavigator();

function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen}/>
                    <Stack.Screen name="Details" component={DetailsScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

export default App;
