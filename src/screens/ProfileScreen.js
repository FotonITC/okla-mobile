import React from 'react';
import {useDispatch} from 'react-redux';
import {Text, View, Button} from 'react-native';
import {signOut} from '../store/actions/auth';

function ProfileScreen() {
    const dispatch = useDispatch();

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Settings Screen</Text>
            <Button title="Sign Out" onPress={() => dispatch(signOut())}/>
        </View>
    );
}

export default ProfileScreen;
