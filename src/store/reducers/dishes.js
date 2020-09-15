import {SET_DISHES} from '../actions/dishes';

const initialState = {
    plats: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_DISHES:
            return {...state, plats: action.payload};
    }
    return state;
};
