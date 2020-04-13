import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import {CollectionRouteComponent} from './modules/collection-route/collection-route.component';
import {HeatMapComponent} from './modules/heat-map/heat-map.component';
import {DisposalsStatsComponent} from './modules/disposals-stats/disposals-stats.component';

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
    }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
