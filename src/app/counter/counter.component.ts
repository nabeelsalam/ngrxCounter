import {Component} from '@angular/core';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {COUNTER_ACTIONS} from './counter.reducer'
import {IAppState} from '../app.model'
 
@Component({
    selector:'counter',
    templateUrl:'counter.component.html',
    styleUrls:['counter.component.css']
})
export class CounterComponent{
    count:Observable<number>;
    constructor(private store:Store<IAppState>){
        this.count = store.select('count');
        this.reset();
    }
    increment(){
        this.store.dispatch({type:COUNTER_ACTIONS.INCREMENT});
    }
    decrement(){
        this.store.dispatch({type:COUNTER_ACTIONS.DECREMENT});
    }
    reset(){
        this.store.dispatch({type:COUNTER_ACTIONS.RESET});
    }
}