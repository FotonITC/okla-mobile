import {createSelector} from 'reselect';

const selectAuthReducer = state => state.auth;

export const selectToken = createSelector(
    [selectAuthReducer],
    auth => auth.token,
);
