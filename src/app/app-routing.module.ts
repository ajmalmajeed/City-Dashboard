import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import {CollectionRouteComponent} from './modules/collection-route/collection-route.component';
import {HeatMapComponent} from './modules/heat-map/heat-map.component';
import {DisposalsStatsComponent} from './modules/disposals-stats/disposals-stats.component';
import {TimelineChartsComponent} from './modules/timeline-charts/timeline-charts.component';
import {BarChartComponent} from './modules/bar-chart/bar-chart.component';
import {PieChartComponent} from './modules/pie-chart/pie-chart.component';
import {LoginComponent} from './modules/login/login.component';
import {AuthGuard} from './services/authentication/auth-guard.service';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
    {
      path: 'login', component: LoginComponent
    },
    {
      path: 'collection-route',
      component: CollectionRouteComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'heat-map',
      component: HeatMapComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'disposal-stats',
      component: DisposalsStatsComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'timeline-charts',
      component: BarChartComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'bar-chart',
      component: BarChartComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'pie-chart',
      component: PieChartComponent,
      canActivate: [AuthGuard]
    }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
