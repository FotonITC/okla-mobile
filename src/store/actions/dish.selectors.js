import {createSelector} from 'reselect';

const selectCart = state => state.dishes;

export const selectDishes = createSelector(
    [selectCart],
    dishes => dishes.plats,
);
