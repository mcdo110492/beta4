import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { ToolbarComponent } from './main/toolbar/toolbar.component';
import { SidenavComponent } from './main/sidenav/sidenav.component';

import { LoginComponent } from './login/login.component';

import { AuthGuardStateService } from './_services/auth-guard-state.service';

const routes: Routes = [
 { path: '', pathMatch: 'full', redirectTo: 'login' },
 { path: 'login', component: LoginComponent, data: { animation: 'login' } },
 { path: 'main', component: MainComponent, data: { animation: 'main'},
   children: [
     { path: '', pathMatch: 'full', redirectTo: 'baptism' },
     { path: 'baptism', loadChildren: 'app/features/baptism/baptism.module#BaptismModule', canLoad:[AuthGuardStateService] },
     { path: 'confirmation', loadChildren: 'app/features/confirmation/confirmation.module#ConfirmationModule', canLoad:[AuthGuardStateService] },
     { path: 'death', loadChildren: 'app/features/death/death.module#DeathModule', canLoad:[AuthGuardStateService] },
     { path: 'minister', loadChildren: 'app/features/minister/minister.module#MinisterModule', canLoad:[AuthGuardStateService] },
   ]
 },
];

export const PrimaryRouteComponents = [
  MainComponent,
  ToolbarComponent,
  SidenavComponent,
  LoginComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
