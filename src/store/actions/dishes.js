import dishesApi from '../../api/foton';

export const SET_DISHES = 'SET_DISHES';
export const GET_DISH_DETAILS = 'GET_DISH_DETAILS';
export const INIT_SELECTED_DISH = 'INIT_SELECTED_DISH';
export const FETCH_DISHES_START = 'FETCH_DISHES_START';
export const REFRESH_DISHES = 'REFRESH_DISHES';
export const UPDATE_PROP = 'UPDATE_PROP';

export const fetchDishes = (page = 0, label = '') => {
    return async dispatch => {
        dispatch(fetchDishesStart());
        try {
            const response = await dishesApi.get('/search/dishes', {
                params: {
                    page,
                    label,
                },
            });
            const data = response.data;
            if (data.content.length > 0) {
                dispatch({type: SET_DISHES, payload: {content: data.content, page: page + 1}});
            } else {
                dispatch({type: SET_DISHES, payload: {content: [], page: page}});
            }
        } catch (e) {
            console.log(e);
        }
    };
};

export const getDishDetails = dishId => {
    return async dispatch => {
        try {
            const response = await dishesApi.get('/dish', {
                params: {id: dishId},
            });
            const data = response.data;
            dispatch({type: GET_DISH_DETAILS, payload: data});
        } catch (e) {
            console.log(e);
        }
    };
};

export const initSelectedDish = () => {
    return {type: INIT_SELECTED_DISH};
};

export const fetchDishesStart = () => {
    return {type: FETCH_DISHES_START};
};

export const refreshDishes = (search = '') => {
    return async dispatch => {
        dispatch({type: REFRESH_DISHES});
        dispatch(fetchDishes(0, search));
    };
};

export const updateProp = ({prop, value}) => {
    return {
        type: UPDATE_PROP,
        payload: {prop, value},
    };
};
