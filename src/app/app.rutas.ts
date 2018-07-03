import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';

const app_routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders= RouterModule.forRoot(app_routes);
