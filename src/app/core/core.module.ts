import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HTTP_INTERCEPTORS } from '@angular/common/http';

// This for the Router Loader at the top of the Toolbar
import { ToolbarLoadingIndicatorService } from './../_services/toolbar-loading-indicator.service';

// Angular Material Dialog Service with Md Spinner to open and close the loader spinner
import { ProgressDialogService } from './../_services/progress-dialog.service';

//Route Authentication Guard and Authetication Login
import { AuthGuardStateService } from './../_services/auth-guard-state.service';
import { AuthenticationService } from './../_services/authentication.service';

// Http Client Interceptor to mutate the request before passing to the backend
import { NoopInterceptor } from './../_services/noop-interceptor.service';

//Error Handler for every Http Response
import { ErrorHandlerService } from './../_services/error-handler.service';

import { ToasterService } from './../_services/toaster.service';

// Table Data Source and Database Shared in the entire App
import { TableDataSourceService } from './../_services/table-data-source.service';
import { TableDatabaseService } from './../_services/table-database.service';

//Master Data Services that will be shared in the entire App
import { MasterDataService } from './../_services/master-data.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    ToolbarLoadingIndicatorService,
    ProgressDialogService,
    AuthGuardStateService,
    AuthenticationService, 
    ErrorHandlerService,
    TableDataSourceService,
    TableDatabaseService,
    ToasterService,
    { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true },
    MasterDataService
  ],
})

//Core Module for the Services
export class CoreModule { 

  constructor(@Optional() @SkipSelf() parentModule : CoreModule) {
    if(parentModule){
      throw new Error(
        'Core Module is already loaded. Only Import it in the Root App Module.'
      );
    }
  }

}
