import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule, MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardService } from 'src/app/modules/dashboard.service';
import {CollectionRouteComponent} from '../../modules/collection-route/collection-route.component';
import {HeatMapComponent} from '../../modules/heat-map/heat-map.component';
import {AgmCoreModule} from '@agm/core';
import {AgmDirectionModule} from 'agm-direction';
import {AgmOverlays} from 'agm-overlays';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    CollectionRouteComponent,
    HeatMapComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    AgmCoreModule,
    AgmDirectionModule,
    AgmOverlays
  ],
  providers: [
    DashboardService
  ]
})
export class DefaultModule { }
