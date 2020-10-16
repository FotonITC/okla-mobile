import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import CreateScreen from './CreateScreen';
import SettingsScreen from './SettingsScreen';

const homeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackScreen = () => {
    return (
        <homeStack.Navigator>
            <homeStack.Screen name="Home" component={HomeScreen}/>
            <homeStack.Screen name="Details" component={DetailsScreen}/>
            <homeStack.Screen name="Create" component={CreateScreen}/>
        </homeStack.Navigator>
    );
};

const MainTabScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStackScreen}/>
            <Tab.Screen name="Settings" component={SettingsScreen}/>
        </Tab.Navigator>
    );
};

export default MainTabScreen;
