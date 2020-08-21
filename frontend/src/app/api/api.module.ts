/* tslint:disable */
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';
import { BudgetService } from './services/budget.service';
import { EventService } from './services/event.service';
import { GuestService } from './services/guest.service';
import { HomeService } from './services/home.service';
import { ServiceProviderService } from './services/service-provider.service';
import { UsersService } from './services/users.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [HttpClientModule],
  exports: [HttpClientModule],
  declarations: [],
  providers: [
    ApiConfiguration,
    BudgetService,
    EventService,
    GuestService,
    HomeService,
    ServiceProviderService,
    UsersService,
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: { rootUrl: customParams.rootUrl },
        },
      ],
    };
  }
}
