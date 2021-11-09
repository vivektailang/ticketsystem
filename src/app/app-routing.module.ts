import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackComponent } from './components/track/track.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { AssetComponent } from './components/asset/asset.component';

import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  },
  {
    path:'ticket',
    component:TicketComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  },
  {
    path:'ticketedit',
    component:TicketComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  },
  {
    path:'asset',
    component:AssetComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  },
  {
    path:'track',
    component:TrackComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
