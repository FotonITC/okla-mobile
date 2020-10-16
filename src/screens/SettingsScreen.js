import React from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {signOut} from '../store/actions/auth';

const SettingsScreen = (props) => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Settings Screen</Text>
            <Button title="Sign Out" onPress={props.signOut}/>
        </View>
    );
};

export default connect(null, {signOut})(SettingsScreen);
