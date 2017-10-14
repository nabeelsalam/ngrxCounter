import { Action } from '@ngrx/store';

const INITIAL_STATE = 0;

export const COUNTER_ACTIONS = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET:'RESET'
};

export function CounterReducer(state: number = INITIAL_STATE, action: Action):number {
    switch (action.type){
        case COUNTER_ACTIONS.INCREMENT: return state+1;
        case COUNTER_ACTIONS.DECREMENT: return state-1;
        case COUNTER_ACTIONS.RESET: return 0;
    }
}