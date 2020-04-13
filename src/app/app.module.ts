import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {HttpClientModule} from '@angular/common/http';
import {AgmCoreModule} from '@agm/core';
import {AgmOverlays} from 'agm-overlays';
import { DisposalsStatsComponent } from './modules/disposals-stats/disposals-stats.component';
import {ChartsModule} from 'ng2-charts';
import { TimelineChartsComponent } from './modules/timeline-charts/timeline-charts.component';
import { BarChartComponent } from './modules/bar-chart/bar-chart.component';
import { PieChartComponent } from './modules/pie-chart/pie-chart.component';
import {MatIconModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    DisposalsStatsComponent,
    TimelineChartsComponent,
    BarChartComponent,
    PieChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    HttpClientModule,
    ChartsModule,
    AgmOverlays,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAFsXG2DvWJp4waA4K4u286qEw6iVLmyIk'
    }),
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
