import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {StoreModule} from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import {CounterComponent} from './counter/counter.component'
import {CounterReducer} from './counter/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({count: CounterReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25 
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
