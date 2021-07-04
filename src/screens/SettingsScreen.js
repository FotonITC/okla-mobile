import React from 'react';
import {View} from 'react-native';
import SignInScreen from "./SignInScreen";
import {useSelector} from 'react-redux';
import ProfileScreen from "./ProfileScreen";

const SettingsScreen = () => {
    const {token} = useSelector(selector => selector.auth);

    return (
        <View style={{flex: 1}}>
            {token ? <ProfileScreen/> : <SignInScreen/>}
        </View>
    );
};

export default SettingsScreen;
