import dishesApi from '../../api/foton';

export const SET_DISHES = 'SET_DISHES';

export const fetchDishes = () => {
    return async dispatch => {
        try {
            const response = await dishesApi.get('/dishes');
            dispatch({type: SET_DISHES, payload: response.data});
        } catch (e) {
            console.log(e);
        }
    };
};
