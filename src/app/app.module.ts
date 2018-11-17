import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

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
import {BasicFlightComponent} from './component/basic-flight/basic-flight.component';
import localePl from '@angular/common/locales/pl';
import localePlExtra from '@angular/common/locales/extra/pl';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localePl, 'pl-PL', localePlExtra);

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FlightsListComponent,
    BasicFlightComponent,
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
  providers: [{
      provide: LOCALE_ID,
      useValue: 'pl-PL'
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
