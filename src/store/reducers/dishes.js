import {
    SET_DISHES,
    GET_DISH_DETAILS,
    INIT_SELECTED_DISH,
    FETCH_DISHES_START,
    REFRESH_DISHES,
    UPDATE_PROP,
} from '../actions/dishes';

const initialState = {
    plats: [],
    selectedDish: null,
    page: 0,
    loading: false,
    search: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_DISHES:
            const {content, page} = action.payload;
            return {...state, plats: [...state.plats, ...content], page, loading: false};
        case GET_DISH_DETAILS:
            return {...state, selectedDish: action.payload};
        case INIT_SELECTED_DISH:
            return {...state, selectedDish: null};
        case FETCH_DISHES_START:
            return {...state, loading: true};
        case REFRESH_DISHES:
            return {...state, plats: []};
        case UPDATE_PROP:
            return {...state, [action.payload.prop]: action.payload.value};
        default:
            return state;
    }
};
