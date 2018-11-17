import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomepageComponent} from './component/homepage/homepage.component';
import {RouterModule} from '@angular/router';
import {FlightsListComponent} from './component/flights-list/flights-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatListModule,
  MatOptionModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule,
} from '@angular/material';
import {LayoutModule} from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FlightsListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatOptionModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatSelectModule,
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
