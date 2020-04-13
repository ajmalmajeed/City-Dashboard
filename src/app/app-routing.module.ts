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

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  }, {
    path: 'posts',
    component: PostsComponent
  },
    {
      path: 'collection-route',
      component: CollectionRouteComponent
    },
    {
      path: 'heat-map',
      component: HeatMapComponent
    },
    {
      path: 'disposal-stats',
      component: DisposalsStatsComponent
    },
    {
      path: 'timeline-charts',
      component: BarChartComponent
    },
    {
      path: 'bar-chart', component: BarChartComponent
    },
    {
      path: 'pie-chart', component: PieChartComponent
    }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
