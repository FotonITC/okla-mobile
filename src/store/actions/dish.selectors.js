import {createSelector} from 'reselect';

const selectDishesReducer = state => state.dishes;

export const selectDishes = createSelector(
    [selectDishesReducer],
    dishes => dishes.plats,
);

export const selectDishDetails = createSelector(
    [selectDishesReducer],
    dishes => dishes.selectedDish,
);

export const selectPage = createSelector(
    [selectDishesReducer],
    dishes => dishes.page,
);

export const selectLoading = createSelector(
    [selectDishesReducer],
    dishes => dishes.loading,
);

export const selectSearch = createSelector(
    [selectDishesReducer],
    dishes => dishes.search,
);
