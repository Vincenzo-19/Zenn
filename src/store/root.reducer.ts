import { combineReducers } from 'redux';
import { NAVBAR_REDUCER } from './navbar/navbar.reducer';
import { TIMER_REDUCER } from './timer/timer.reducer';

export const rootReducers = combineReducers({
    todos: () => [1, 2, 3],
    navbar: NAVBAR_REDUCER,
    timer: TIMER_REDUCER,
});

export type RootState = ReturnType<typeof rootReducers>;
