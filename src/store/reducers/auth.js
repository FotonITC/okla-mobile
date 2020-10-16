import {SIGN_IN, SIGN_OUT, SIGN_UP, UPDATE_AUTH_PROP} from '../actions/auth';

const initialState = {
    email: '',
    password: '',
    token: null,
    loading: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {...initialState, email: '', password: '', loading: false, token: action.payload.token};
        case SIGN_OUT:
            return initialState;
        case SIGN_UP:
            return {...initialState, email: '', loading: false, password: ''};
        case UPDATE_AUTH_PROP:
            return {...state, [action.payload.prop]: action.payload.value};
        default:
            return state;
    }
};
