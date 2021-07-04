import React from 'react';
import {View, StyleSheet, Button, TextInput, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {signIn, updateProp} from '../store/actions/auth';

const SignInScreen = (props) => {

    const {signIn, email, password, updateProp, loading} = props;

    const handleSignIn = () => {
        //TODO validation

        updateProp({prop: 'loading', value: true});
        signIn(email, password);
    };

    return (
        <View style={styles.screen}>
            <View style={styles.action}>
                <TextInput
                    placeholder="Your Email"
                    style={styles.textInput}
                    autoCapitalize="none"
                    value={email}
                    autoCorrect={false}
                    onChangeText={value => updateProp({prop: 'email', value})}
                />
            </View>

            <View style={styles.action}>
                <TextInput
                    placeholder="Your Password"
                    style={styles.textInput}
                    autoCapitalize="none"
                    secureTextEntry
                    value={password}
                    onChangeText={value => updateProp({prop: 'password', value})}
                />
            </View>

            {loading ? <ActivityIndicator size="small"/> : <Button title="Sign In" onPress={handleSignIn}/>}

        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        marginBottom: 20,
    },
    textInput: {
        width: '70%',
        paddingLeft: 5,
        color: '#05375a',
    },
});

const mapStateToProps = state => {
    const {email, password, loading} = state.auth;
    return {email, password, loading};
};

export default connect(mapStateToProps, {signIn, updateProp})(SignInScreen);
