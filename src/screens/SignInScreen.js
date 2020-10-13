import React from 'react';
import {View, StyleSheet, Button, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {signIn, updateProp} from '../store/actions/auth';

class SignInScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {email, password, updateProp, signIn} = this.props;

        return (
            <View style={styles.screen}>
                <View style={styles.action}>
                    <TextInput
                        placeholder="Your Email"
                        style={styles.textInput}
                        autoCapitalize="none"
                        value={email}
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

                <Button title="Sign In" onPress={() => signIn(email, password)}/>

            </View>
        );
    };
}

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

const mapStateToProps = (state) => {
    const {email, password, loading} = state.auth;
    console.log(state.auth);
    return {
        email, password, loading,
    };
};

export default connect(mapStateToProps, {signIn, updateProp})(SignInScreen);
