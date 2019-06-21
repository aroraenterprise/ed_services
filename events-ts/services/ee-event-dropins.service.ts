/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { EePagedEventDropin } from '../models/ee-paged-event-dropin';
import { EeDefaultError } from '../models/ee-default-error';
import { EeEventDropin } from '../models/ee-event-dropin';
import { EeEventDropinUpdate } from '../models/ee-event-dropin-update';
import { EeEventAttendeeDropin } from '../models/ee-event-attendee-dropin';
import { EePagedEventAttendee } from '../models/ee-paged-event-attendee';

/**
 * Event Dropins
 */
@Injectable({
  providedIn: 'root',
})
class EeEventDropinsService extends __BaseService {
  static readonly listDropinsPath = '/events/{eventId}/dropins';
  static readonly createDropinPath = '/events/{eventId}/dropins';
  static readonly retrieveDropinPath = '/dropins/{dropinId}';
  static readonly updateDropinPath = '/dropins/{dropinId}';
  static readonly deleteDropinPath = '/dropins/{dropinId}';
  static readonly createAttendeeDropinPath = '/dropins/{dropinId}/attendees';
  static readonly deleteAttendeeDropinPath = '/dropins/{dropinId}/attendees';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `EeEventDropinsService.ListDropinsParams` containing the following parameters:
   *
   * - `eventId`: Event Id
   *
   * - `q`:
   *
   * - `limit`: Number of items returned
   *
   * - `facets`: e.g [profiledIds:edropin],[profileIds:agdontario]
   *
   * - `cursor`: Start Cursor for query
   *
   * @return Attendees for the event
   */
  listDropinsResponse(params: EeEventDropinsService.ListDropinsParams): __Observable<__StrictHttpResponse<EePagedEventDropin>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.q != null) __params = __params.set('q', params.q.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.facets != null) __params = __params.set('facets', params.facets.toString());
    if (params.cursor != null) __params = __params.set('cursor', params.cursor.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/events/${params.eventId}/dropins`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EePagedEventDropin>;
      })
    );
  }
  /**
   * @param params The `EeEventDropinsService.ListDropinsParams` containing the following parameters:
   *
   * - `eventId`: Event Id
   *
   * - `q`:
   *
   * - `limit`: Number of items returned
   *
   * - `facets`: e.g [profiledIds:edropin],[profileIds:agdontario]
   *
   * - `cursor`: Start Cursor for query
   *
   * @return Attendees for the event
   */
  listDropins(params: EeEventDropinsService.ListDropinsParams): __Observable<EePagedEventDropin> {
    return this.listDropinsResponse(params).pipe(
      __map(_r => _r.body as EePagedEventDropin)
    );
  }

  /**
   * @param params The `EeEventDropinsService.CreateDropinParams` containing the following parameters:
   *
   * - `eventId`: Event Id
   *
   * - `body`: Dropin object to be created
   *
   * @return Dropin added
   */
  createDropinResponse(params: EeEventDropinsService.CreateDropinParams): __Observable<__StrictHttpResponse<EeEventDropin>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/events/${params.eventId}/dropins`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeEventDropin>;
      })
    );
  }
  /**
   * @param params The `EeEventDropinsService.CreateDropinParams` containing the following parameters:
   *
   * - `eventId`: Event Id
   *
   * - `body`: Dropin object to be created
   *
   * @return Dropin added
   */
  createDropin(params: EeEventDropinsService.CreateDropinParams): __Observable<EeEventDropin> {
    return this.createDropinResponse(params).pipe(
      __map(_r => _r.body as EeEventDropin)
    );
  }

  /**
   * @param dropinId Dropin Id
   * @return OK
   */
  retrieveDropinResponse(dropinId: string): __Observable<__StrictHttpResponse<EeEventDropin>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/dropins/${dropinId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeEventDropin>;
      })
    );
  }
  /**
   * @param dropinId Dropin Id
   * @return OK
   */
  retrieveDropin(dropinId: string): __Observable<EeEventDropin> {
    return this.retrieveDropinResponse(dropinId).pipe(
      __map(_r => _r.body as EeEventDropin)
    );
  }

  /**
   * @param params The `EeEventDropinsService.UpdateDropinParams` containing the following parameters:
   *
   * - `dropinId`: Dropin Id
   *
   * - `body`: Dropin to update
   *
   * @return Event Dropin updated
   */
  updateDropinResponse(params: EeEventDropinsService.UpdateDropinParams): __Observable<__StrictHttpResponse<EeEventDropin>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/dropins/${params.dropinId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeEventDropin>;
      })
    );
  }
  /**
   * @param params The `EeEventDropinsService.UpdateDropinParams` containing the following parameters:
   *
   * - `dropinId`: Dropin Id
   *
   * - `body`: Dropin to update
   *
   * @return Event Dropin updated
   */
  updateDropin(params: EeEventDropinsService.UpdateDropinParams): __Observable<EeEventDropin> {
    return this.updateDropinResponse(params).pipe(
      __map(_r => _r.body as EeEventDropin)
    );
  }

  /**
   * @param dropinId Dropin Id
   * @return Dropin deleted
   */
  deleteDropinResponse(dropinId: string): __Observable<__StrictHttpResponse<EeEventDropin>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/dropins/${dropinId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeEventDropin>;
      })
    );
  }
  /**
   * @param dropinId Dropin Id
   * @return Dropin deleted
   */
  deleteDropin(dropinId: string): __Observable<EeEventDropin> {
    return this.deleteDropinResponse(dropinId).pipe(
      __map(_r => _r.body as EeEventDropin)
    );
  }

  /**
   * @param params The `EeEventDropinsService.CreateAttendeeDropinParams` containing the following parameters:
   *
   * - `dropinId`: Dropin Id
   *
   * - `attendeeIds`:
   *
   * @return Dropin assigned
   */
  createAttendeeDropinResponse(params: EeEventDropinsService.CreateAttendeeDropinParams): __Observable<__StrictHttpResponse<EeEventAttendeeDropin>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    (params.attendeeIds || []).forEach(val => {if (val != null) __params = __params.append('attendeeIds', val.toString())});
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/dropins/${params.dropinId}/attendees`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeEventAttendeeDropin>;
      })
    );
  }
  /**
   * @param params The `EeEventDropinsService.CreateAttendeeDropinParams` containing the following parameters:
   *
   * - `dropinId`: Dropin Id
   *
   * - `attendeeIds`:
   *
   * @return Dropin assigned
   */
  createAttendeeDropin(params: EeEventDropinsService.CreateAttendeeDropinParams): __Observable<EeEventAttendeeDropin> {
    return this.createAttendeeDropinResponse(params).pipe(
      __map(_r => _r.body as EeEventAttendeeDropin)
    );
  }

  /**
   * @param params The `EeEventDropinsService.DeleteAttendeeDropinParams` containing the following parameters:
   *
   * - `dropinId`: Dropin Id
   *
   * - `attendeeIds`:
   *
   * @return Dropin removed
   */
  deleteAttendeeDropinResponse(params: EeEventDropinsService.DeleteAttendeeDropinParams): __Observable<__StrictHttpResponse<EePagedEventAttendee>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    (params.attendeeIds || []).forEach(val => {if (val != null) __params = __params.append('attendeeIds', val.toString())});
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/dropins/${params.dropinId}/attendees`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EePagedEventAttendee>;
      })
    );
  }
  /**
   * @param params The `EeEventDropinsService.DeleteAttendeeDropinParams` containing the following parameters:
   *
   * - `dropinId`: Dropin Id
   *
   * - `attendeeIds`:
   *
   * @return Dropin removed
   */
  deleteAttendeeDropin(params: EeEventDropinsService.DeleteAttendeeDropinParams): __Observable<EePagedEventAttendee> {
    return this.deleteAttendeeDropinResponse(params).pipe(
      __map(_r => _r.body as EePagedEventAttendee)
    );
  }
}

module EeEventDropinsService {

  /**
   * Parameters for listDropins
   */
  export interface ListDropinsParams {

    /**
     * Event Id
     */
    eventId: string;
    q?: string;

    /**
     * Number of items returned
     */
    limit?: number;

    /**
     * e.g [profiledIds:edropin],[profileIds:agdontario]
     */
    facets?: string;

    /**
     * Start Cursor for query
     */
    cursor?: string;
  }

  /**
   * Parameters for createDropin
   */
  export interface CreateDropinParams {

    /**
     * Event Id
     */
    eventId: string;

    /**
     * Dropin object to be created
     */
    body: EeEventDropinUpdate;
  }

  /**
   * Parameters for updateDropin
   */
  export interface UpdateDropinParams {

    /**
     * Dropin Id
     */
    dropinId: string;

    /**
     * Dropin to update
     */
    body: EeEventDropinUpdate;
  }

  /**
   * Parameters for createAttendeeDropin
   */
  export interface CreateAttendeeDropinParams {

    /**
     * Dropin Id
     */
    dropinId: string;
    attendeeIds?: Array<string>;
  }

  /**
   * Parameters for deleteAttendeeDropin
   */
  export interface DeleteAttendeeDropinParams {

    /**
     * Dropin Id
     */
    dropinId: string;
    attendeeIds?: Array<string>;
  }
}

export { EeEventDropinsService }
