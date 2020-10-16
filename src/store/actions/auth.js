import dishesApi from '../../api/foton';
import AsyncStorage from '@react-native-community/async-storage';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';
export const SIGN_UP = 'SIGN_UP';
export const UPDATE_AUTH_PROP = 'UPDATE_AUTH_PROP';

export const signIn = (email, password) => {
    return async dispatch => {
        try {
            const response = await dishesApi.post('/sign-in', {
                'email': email,
                'password': password,
            });
            const {jwt} = response.data;
            await AsyncStorage.setItem('token', jwt);
            dispatch({type: SIGN_IN, payload: {token: jwt}});
        } catch (e) {
            console.log(e);
        }
    };
};

export const signOut = () => {
    return async dispatch => {
        try {
            await AsyncStorage.removeItem('token');
            dispatch({type: SIGN_OUT});
        } catch (e) {
            console.log(e);
        }
    };
};


export const updateProp = ({prop, value}) => {
    return {
        type: UPDATE_AUTH_PROP,
        payload: {prop, value},
    };
};
