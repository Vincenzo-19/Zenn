import { combineReducers } from 'redux';
import { NAVBAR_REDUCER } from './navbar/navbar.reducer';
import timerReducer from './timer/timerSlice';

export const rootReducers = combineReducers({
    todos: () => [1, 2, 3],
    navbar: NAVBAR_REDUCER,
    timer: timerReducer,
});

export type RootState = ReturnType<typeof rootReducers>;
