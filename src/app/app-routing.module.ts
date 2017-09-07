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
     { path: 'marriage', loadChildren: 'app/features/marriage/marriage.module#MarriageModule', canLoad:[AuthGuardStateService] },
     { path: 'minister', loadChildren: 'app/features/minister/minister.module#MinisterModule', canLoad:[AuthGuardStateService] },
     { path: 'item/type', loadChildren: 'app/features/item-type/item-type.module#ItemTypeModule', canLoad:[AuthGuardStateService] },
     { path: 'item/price', loadChildren: 'app/features/item-price/item-price.module#ItemPriceModule', canLoad:[AuthGuardStateService] },
     { path: 'group', loadChildren: 'app/features/group/group.module#GroupModule', canLoad:[AuthGuardStateService] },
     { path: 'pos', loadChildren: 'app/features/pos/pos.module#PosModule', canLoad:[AuthGuardStateService] },
     { path: 'invoices', loadChildren: 'app/features/invoices/invoices.module#InvoicesModule', canLoad:[AuthGuardStateService] },
     { path: 'invoice/reports', loadChildren: 'app/features/invoice-reports/invoice-reports.module#InvoiceReportsModule', canLoad:[AuthGuardStateService] },
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
