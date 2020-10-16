import React, {} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';

import MainTabScreen from './MainTabScreen';
import AuthStackScreen from './AuthStackScreen';
import {navigationRef} from '../navigationRef';

const RootNavigation = (props) => {
    return (
        <NavigationContainer ref={navigationRef}>
            {props.token !== null ? <MainTabScreen/> : <AuthStackScreen/>}
        </NavigationContainer>
    );
};

const mapStateToProps = state => {
    const {token} = state.auth;
    return {token};
};

export default connect(mapStateToProps, {})(RootNavigation);
