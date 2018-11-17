import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomepageComponent} from './component/homepage/homepage.component';
import {RouterModule} from '@angular/router';
import {FlightsListComponent} from './component/flights-list/flights-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatOptionModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule,
} from '@angular/material';
import {LayoutModule} from '@angular/cdk/layout';
import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BasicFlightComponent} from './component/basic-flight/basic-flight.component';
import localePl from '@angular/common/locales/pl';
import localePlExtra from '@angular/common/locales/extra/pl';
import {registerLocaleData} from '@angular/common';
import {SpinnerComponent} from './component/common/spinner/spinner.component';
import {FlightsListDetailedComponent} from './component/flights-list-detailed/flights-list-detailed.component';
import {DetailedFlightComponent} from './component/detailed-flight/detailed-flight.component';
import {SingleFlightComponent} from './component/single-flight/single-flight.component';

registerLocaleData(localePl, 'pl-PL', localePlExtra);

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FlightsListComponent,
    BasicFlightComponent,
    SpinnerComponent,
    FlightsListDetailedComponent,
    DetailedFlightComponent,
    SingleFlightComponent,
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
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    NgxMatSelectSearchModule,
    MatAutocompleteModule,
    FormsModule,
    RouterModule.forRoot(
      [
        {path: '', component: HomepageComponent},
        {path: 'flights/:sourceACode/:sourceBCode', component: FlightsListComponent},
        {path: 'flights/:sourceACode/:sourceBCode/:targetCode', component: FlightsListDetailedComponent}
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
