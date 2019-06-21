/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { EePermissionsService } from './services/ee-permissions.service';
import { EeEventsService } from './services/ee-events.service';
import { EeEventTagsService } from './services/ee-event-tags.service';
import { EeEventDropinsService } from './services/ee-event-dropins.service';
import { EeEventAttendeesService } from './services/ee-event-attendees.service';
import { EeEventCreditsService } from './services/ee-event-credits.service';
import { EeEventCertificatesService } from './services/ee-event-certificates.service';
import { EeKioskService } from './services/ee-kiosk.service';
import { EeEventAutomationsService } from './services/ee-event-automations.service';
import { EeQrCodeService } from './services/ee-qr-code.service';
import { EeSurveysService } from './services/ee-surveys.service';
import { EeMessagesService } from './services/ee-messages.service';
import { EePACEService } from './services/ee-pace.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    EePermissionsService,
    EeEventsService,
    EeEventTagsService,
    EeEventDropinsService,
    EeEventAttendeesService,
    EeEventCreditsService,
    EeEventCertificatesService,
    EeKioskService,
    EeEventAutomationsService,
    EeQrCodeService,
    EeSurveysService,
    EeMessagesService,
    EePACEService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
