/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { EePagedEventAutomation } from '../models/ee-paged-event-automation';
import { EeDefaultError } from '../models/ee-default-error';
import { EeEventAutomation } from '../models/ee-event-automation';
import { EeEventAutomationUpdate } from '../models/ee-event-automation-update';
import { EeSuccess } from '../models/ee-success';
import { EePubSubMessage } from '../models/ee-pub-sub-message';

/**
 * Automated actions based on triggers such as dropin => assign certificate
 */
@Injectable({
  providedIn: 'root',
})
class EeEventAutomationsService extends __BaseService {
  static readonly listAllEventAutomationsPath = '/events/{eventId}/automations';
  static readonly addEventAutomationPath = '/events/{eventId}/automations';
  static readonly getEventAutomationPath = '/automations/{automationId}';
  static readonly updateEventAutomationPath = '/automations/{automationId}';
  static readonly deleteEventAutomationPath = '/automations/{automationId}';
  static readonly triggerEventAutomationPath = '/automations/{triggerType}/trigger';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `EeEventAutomationsService.ListAllEventAutomationsParams` containing the following parameters:
   *
   * - `eventId`: Event Id
   *
   * - `limit`: Number of items returned
   *
   * - `cursor`: Start Cursor for query
   *
   * @return Automations for the event
   */
  listAllEventAutomationsResponse(params: EeEventAutomationsService.ListAllEventAutomationsParams): __Observable<__StrictHttpResponse<EePagedEventAutomation>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.cursor != null) __params = __params.set('cursor', params.cursor.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/events/${params.eventId}/automations`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EePagedEventAutomation>;
      })
    );
  }
  /**
   * @param params The `EeEventAutomationsService.ListAllEventAutomationsParams` containing the following parameters:
   *
   * - `eventId`: Event Id
   *
   * - `limit`: Number of items returned
   *
   * - `cursor`: Start Cursor for query
   *
   * @return Automations for the event
   */
  listAllEventAutomations(params: EeEventAutomationsService.ListAllEventAutomationsParams): __Observable<EePagedEventAutomation> {
    return this.listAllEventAutomationsResponse(params).pipe(
      __map(_r => _r.body as EePagedEventAutomation)
    );
  }

  /**
   * @param params The `EeEventAutomationsService.AddEventAutomationParams` containing the following parameters:
   *
   * - `eventId`: Event Id
   *
   * - `automationProps`: Automation object to be created
   *
   * @return Automation added
   */
  addEventAutomationResponse(params: EeEventAutomationsService.AddEventAutomationParams): __Observable<__StrictHttpResponse<EeEventAutomation>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.automationProps;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/events/${params.eventId}/automations`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeEventAutomation>;
      })
    );
  }
  /**
   * @param params The `EeEventAutomationsService.AddEventAutomationParams` containing the following parameters:
   *
   * - `eventId`: Event Id
   *
   * - `automationProps`: Automation object to be created
   *
   * @return Automation added
   */
  addEventAutomation(params: EeEventAutomationsService.AddEventAutomationParams): __Observable<EeEventAutomation> {
    return this.addEventAutomationResponse(params).pipe(
      __map(_r => _r.body as EeEventAutomation)
    );
  }

  /**
   * @param automationId Automation Id
   * @return OK
   */
  getEventAutomationResponse(automationId: string): __Observable<__StrictHttpResponse<EeEventAutomation>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/automations/${automationId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeEventAutomation>;
      })
    );
  }
  /**
   * @param automationId Automation Id
   * @return OK
   */
  getEventAutomation(automationId: string): __Observable<EeEventAutomation> {
    return this.getEventAutomationResponse(automationId).pipe(
      __map(_r => _r.body as EeEventAutomation)
    );
  }

  /**
   * @param params The `EeEventAutomationsService.UpdateEventAutomationParams` containing the following parameters:
   *
   * - `automationProps`: Automation to update
   *
   * - `automationId`: Automation Id
   *
   * @return Event Automation updated
   */
  updateEventAutomationResponse(params: EeEventAutomationsService.UpdateEventAutomationParams): __Observable<__StrictHttpResponse<EeEventAutomation>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.automationProps;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/automations/${params.automationId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeEventAutomation>;
      })
    );
  }
  /**
   * @param params The `EeEventAutomationsService.UpdateEventAutomationParams` containing the following parameters:
   *
   * - `automationProps`: Automation to update
   *
   * - `automationId`: Automation Id
   *
   * @return Event Automation updated
   */
  updateEventAutomation(params: EeEventAutomationsService.UpdateEventAutomationParams): __Observable<EeEventAutomation> {
    return this.updateEventAutomationResponse(params).pipe(
      __map(_r => _r.body as EeEventAutomation)
    );
  }

  /**
   * @param automationId Automation Id
   * @return Automation deleted
   */
  deleteEventAutomationResponse(automationId: string): __Observable<__StrictHttpResponse<EeSuccess>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/automations/${automationId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeSuccess>;
      })
    );
  }
  /**
   * @param automationId Automation Id
   * @return Automation deleted
   */
  deleteEventAutomation(automationId: string): __Observable<EeSuccess> {
    return this.deleteEventAutomationResponse(automationId).pipe(
      __map(_r => _r.body as EeSuccess)
    );
  }

  /**
   * @param params The `EeEventAutomationsService.TriggerEventAutomationParams` containing the following parameters:
   *
   * - `triggerType`:
   *
   * - `subData`: Base64 encoded message
   *
   * - `apiKey`:
   *
   * @return OK
   */
  triggerEventAutomationResponse(params: EeEventAutomationsService.TriggerEventAutomationParams): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.subData;
    if (params.apiKey != null) __params = __params.set('apiKey', params.apiKey.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/automations/${params.triggerType}/trigger`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * @param params The `EeEventAutomationsService.TriggerEventAutomationParams` containing the following parameters:
   *
   * - `triggerType`:
   *
   * - `subData`: Base64 encoded message
   *
   * - `apiKey`:
   *
   * @return OK
   */
  triggerEventAutomation(params: EeEventAutomationsService.TriggerEventAutomationParams): __Observable<string> {
    return this.triggerEventAutomationResponse(params).pipe(
      __map(_r => _r.body as string)
    );
  }
}

module EeEventAutomationsService {

  /**
   * Parameters for listAllEventAutomations
   */
  export interface ListAllEventAutomationsParams {

    /**
     * Event Id
     */
    eventId: string;

    /**
     * Number of items returned
     */
    limit?: number;

    /**
     * Start Cursor for query
     */
    cursor?: string;
  }

  /**
   * Parameters for addEventAutomation
   */
  export interface AddEventAutomationParams {

    /**
     * Event Id
     */
    eventId: string;

    /**
     * Automation object to be created
     */
    automationProps: EeEventAutomationUpdate;
  }

  /**
   * Parameters for updateEventAutomation
   */
  export interface UpdateEventAutomationParams {

    /**
     * Automation to update
     */
    automationProps: EeEventAutomationUpdate;

    /**
     * Automation Id
     */
    automationId: string;
  }

  /**
   * Parameters for triggerEventAutomation
   */
  export interface TriggerEventAutomationParams {
    triggerType: string;

    /**
     * Base64 encoded message
     */
    subData: EePubSubMessage;
    apiKey: string;
  }
}

export { EeEventAutomationsService }
