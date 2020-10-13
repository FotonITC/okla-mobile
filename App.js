import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import dishesReducer from './src/store/reducers/dishes';
import authReducer from './src/store/reducers/auth';
import {navigationRef} from './src/navigationRef';

import DetailsScreen from './src/screens/DetailsScreen';
import HomeScreen from './src/screens/HomeScreen';
import CreateScreen from './src/screens/CreateScreen';
import SignInScreen from './src/screens/SignInScreen';

const rootReducer = combineReducers({
    dishes: dishesReducer,
    auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const Stack = createStackNavigator();

function App() {
    return (
        <Provider store={store}>
            <NavigationContainer ref={navigationRef}>
                <Stack.Navigator>
                    <Stack.Screen name="SignIn" component={SignInScreen}/>
                    <Stack.Screen name="Home" component={HomeScreen}/>
                    <Stack.Screen name="Details" component={DetailsScreen}/>
                    <Stack.Screen name="Create" component={CreateScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

export default App;
