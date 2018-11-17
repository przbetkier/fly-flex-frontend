import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomepageComponent} from './component/homepage/homepage.component';
import {RouterModule} from '@angular/router';
import { FlightsListComponent } from './component/flights-list/flights-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FlightsListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {path: '', component: HomepageComponent},
        {path: 'flights', component: FlightsListComponent}
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
