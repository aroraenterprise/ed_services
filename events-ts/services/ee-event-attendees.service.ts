/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { EePagedEventAttendee } from '../models/ee-paged-event-attendee';
import { EeDefaultError } from '../models/ee-default-error';
import { EeEventAttendee } from '../models/ee-event-attendee';
import { EeEventAttendeeUpdate } from '../models/ee-event-attendee-update';
import { EeCsv } from '../models/ee-csv';
import { EeSuccess } from '../models/ee-success';
import { EeSendLinkInput } from '../models/ee-send-link-input';
import { EeEventAttendeeTransfer } from '../models/ee-event-attendee-transfer';
import { EeEmailLookup } from '../models/ee-email-lookup';
import { EePagedEventAttendeeCode } from '../models/ee-paged-event-attendee-code';
import { EeAttendeeImport } from '../models/ee-attendee-import';

/**
 * Event Attendees
 */
@Injectable({
  providedIn: 'root',
})
class EeEventAttendeesService extends __BaseService {
  static readonly listAttendeesPath = '/events/{eventId}/attendees';
  static readonly createAttendeePath = '/events/{eventId}/attendees';
  static readonly exportAttendeesPath = '/events/{eventId}/attendees/export';
  static readonly listUserAttendeesPath = '/attendees';
  static readonly retrieveAttendeePath = '/attendees/{attendeeId}';
  static readonly updateAttendeePath = '/attendees/{attendeeId}';
  static readonly deleteAttendeePath = '/attendees/{attendeeId}';
  static readonly sendAttendeeLinkPath = '/attendees/{attendeeId}/link';
  static readonly transferAttendeesPath = '/attendees/transfer';
  static readonly retrieveAttendeesByCodePath = '/attendees/code/{code}';
  static readonly createEmailLookupPath = '/attendees/email-lookup';
  static readonly listEmailLookupAttendeesPath = '/attendees/email-lookup/{code}';
  static readonly updateAccountTicketsPath = '/attendees/account-import';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `EeEventAttendeesService.ListAttendeesParams` containing the following parameters:
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
  listAttendeesResponse(params: EeEventAttendeesService.ListAttendeesParams): __Observable<__StrictHttpResponse<EePagedEventAttendee>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.q != null) __params = __params.set('q', params.q.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.facets != null) __params = __params.set('facets', params.facets.toString());
    if (params.cursor != null) __params = __params.set('cursor', params.cursor.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/events/${params.eventId}/attendees`,
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
   * @param params The `EeEventAttendeesService.ListAttendeesParams` containing the following parameters:
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
  listAttendees(params: EeEventAttendeesService.ListAttendeesParams): __Observable<EePagedEventAttendee> {
    return this.listAttendeesResponse(params).pipe(
      __map(_r => _r.body as EePagedEventAttendee)
    );
  }

  /**
   * @param params The `EeEventAttendeesService.CreateAttendeeParams` containing the following parameters:
   *
   * - `ticketId`:
   *
   * - `eventId`: Event Id
   *
   * - `eventId`: Event Id
   *
   * - `attendeeProps`: Attendee object to be created
   *
   * @return Attendee added
   */
  createAttendeeResponse(params: EeEventAttendeesService.CreateAttendeeParams): __Observable<__StrictHttpResponse<EeEventAttendee>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.ticketId != null) __params = __params.set('ticketId', params.ticketId.toString());


    __body = params.attendeeProps;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/events/${params.eventId}/attendees`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeEventAttendee>;
      })
    );
  }
  /**
   * @param params The `EeEventAttendeesService.CreateAttendeeParams` containing the following parameters:
   *
   * - `ticketId`:
   *
   * - `eventId`: Event Id
   *
   * - `eventId`: Event Id
   *
   * - `attendeeProps`: Attendee object to be created
   *
   * @return Attendee added
   */
  createAttendee(params: EeEventAttendeesService.CreateAttendeeParams): __Observable<EeEventAttendee> {
    return this.createAttendeeResponse(params).pipe(
      __map(_r => _r.body as EeEventAttendee)
    );
  }

  /**
   * @param params The `EeEventAttendeesService.ExportAttendeesParams` containing the following parameters:
   *
   * - `eventId`: Event Id
   *
   * - `facets`: e.g [profiledIds:edropin],[profileIds:agdontario]
   *
   * @return Export attendees for the event as a csv
   */
  exportAttendeesResponse(params: EeEventAttendeesService.ExportAttendeesParams): __Observable<__StrictHttpResponse<EeCsv>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.facets != null) __params = __params.set('facets', params.facets.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/events/${params.eventId}/attendees/export`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeCsv>;
      })
    );
  }
  /**
   * @param params The `EeEventAttendeesService.ExportAttendeesParams` containing the following parameters:
   *
   * - `eventId`: Event Id
   *
   * - `facets`: e.g [profiledIds:edropin],[profileIds:agdontario]
   *
   * @return Export attendees for the event as a csv
   */
  exportAttendees(params: EeEventAttendeesService.ExportAttendeesParams): __Observable<EeCsv> {
    return this.exportAttendeesResponse(params).pipe(
      __map(_r => _r.body as EeCsv)
    );
  }

  /**
   * @param params The `EeEventAttendeesService.ListUserAttendeesParams` containing the following parameters:
   *
   * - `q`:
   *
   * - `limit`: Number of items returned
   *
   * - `facets`: e.g [profiledIds:edropin],[profileIds:agdontario]
   *
   * - `cursor`: Start Cursor for query
   *
   * @return Get attendees for user
   */
  listUserAttendeesResponse(params: EeEventAttendeesService.ListUserAttendeesParams): __Observable<__StrictHttpResponse<EePagedEventAttendee>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.q != null) __params = __params.set('q', params.q.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.facets != null) __params = __params.set('facets', params.facets.toString());
    if (params.cursor != null) __params = __params.set('cursor', params.cursor.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/attendees`,
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
   * @param params The `EeEventAttendeesService.ListUserAttendeesParams` containing the following parameters:
   *
   * - `q`:
   *
   * - `limit`: Number of items returned
   *
   * - `facets`: e.g [profiledIds:edropin],[profileIds:agdontario]
   *
   * - `cursor`: Start Cursor for query
   *
   * @return Get attendees for user
   */
  listUserAttendees(params: EeEventAttendeesService.ListUserAttendeesParams): __Observable<EePagedEventAttendee> {
    return this.listUserAttendeesResponse(params).pipe(
      __map(_r => _r.body as EePagedEventAttendee)
    );
  }

  /**
   * @param attendeeId Attendee Id
   * @return OK
   */
  retrieveAttendeeResponse(attendeeId: string): __Observable<__StrictHttpResponse<EeEventAttendee>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/attendees/${attendeeId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeEventAttendee>;
      })
    );
  }
  /**
   * @param attendeeId Attendee Id
   * @return OK
   */
  retrieveAttendee(attendeeId: string): __Observable<EeEventAttendee> {
    return this.retrieveAttendeeResponse(attendeeId).pipe(
      __map(_r => _r.body as EeEventAttendee)
    );
  }

  /**
   * @param params The `EeEventAttendeesService.UpdateAttendeeParams` containing the following parameters:
   *
   * - `attendeeProps`: Attendee object that needs to be updated
   *
   * - `attendeeId`: Attendee Id
   *
   * @return Attendee updated
   */
  updateAttendeeResponse(params: EeEventAttendeesService.UpdateAttendeeParams): __Observable<__StrictHttpResponse<EeEventAttendee>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.attendeeProps;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/attendees/${params.attendeeId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeEventAttendee>;
      })
    );
  }
  /**
   * @param params The `EeEventAttendeesService.UpdateAttendeeParams` containing the following parameters:
   *
   * - `attendeeProps`: Attendee object that needs to be updated
   *
   * - `attendeeId`: Attendee Id
   *
   * @return Attendee updated
   */
  updateAttendee(params: EeEventAttendeesService.UpdateAttendeeParams): __Observable<EeEventAttendee> {
    return this.updateAttendeeResponse(params).pipe(
      __map(_r => _r.body as EeEventAttendee)
    );
  }

  /**
   * @param attendeeId Attendee Id
   * @return Event Attendee deleted
   */
  deleteAttendeeResponse(attendeeId: string): __Observable<__StrictHttpResponse<EeEventAttendee>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/attendees/${attendeeId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeEventAttendee>;
      })
    );
  }
  /**
   * @param attendeeId Attendee Id
   * @return Event Attendee deleted
   */
  deleteAttendee(attendeeId: string): __Observable<EeEventAttendee> {
    return this.deleteAttendeeResponse(attendeeId).pipe(
      __map(_r => _r.body as EeEventAttendee)
    );
  }

  /**
   * @param params The `EeEventAttendeesService.SendAttendeeLinkParams` containing the following parameters:
   *
   * - `body`: Send to a different email than the one associated with the account
   *
   * - `attendeeId`: Attendee Id
   *
   * @return Claim sent
   */
  sendAttendeeLinkResponse(params: EeEventAttendeesService.SendAttendeeLinkParams): __Observable<__StrictHttpResponse<EeSuccess>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.body;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/attendees/${params.attendeeId}/link`,
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
   * @param params The `EeEventAttendeesService.SendAttendeeLinkParams` containing the following parameters:
   *
   * - `body`: Send to a different email than the one associated with the account
   *
   * - `attendeeId`: Attendee Id
   *
   * @return Claim sent
   */
  sendAttendeeLink(params: EeEventAttendeesService.SendAttendeeLinkParams): __Observable<EeSuccess> {
    return this.sendAttendeeLinkResponse(params).pipe(
      __map(_r => _r.body as EeSuccess)
    );
  }

  /**
   * @param body Attendee transfer properties
   * @return Attendees transfered
   */
  transferAttendeesResponse(body: EeEventAttendeeTransfer): __Observable<__StrictHttpResponse<EePagedEventAttendee>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/attendees/transfer`,
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
   * @param body Attendee transfer properties
   * @return Attendees transfered
   */
  transferAttendees(body: EeEventAttendeeTransfer): __Observable<EePagedEventAttendee> {
    return this.transferAttendeesResponse(body).pipe(
      __map(_r => _r.body as EePagedEventAttendee)
    );
  }

  /**
   * @param code undefined
   * @return OK
   */
  retrieveAttendeesByCodeResponse(code: string): __Observable<__StrictHttpResponse<EePagedEventAttendee>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/attendees/code/${code}`,
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
   * @param code undefined
   * @return OK
   */
  retrieveAttendeesByCode(code: string): __Observable<EePagedEventAttendee> {
    return this.retrieveAttendeesByCodeResponse(code).pipe(
      __map(_r => _r.body as EePagedEventAttendee)
    );
  }

  /**
   * @param body Email lookup input
   * @return OK
   */
  createEmailLookupResponse(body: EeEmailLookup): __Observable<__StrictHttpResponse<EeSuccess>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/attendees/email-lookup`,
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
   * @param body Email lookup input
   * @return OK
   */
  createEmailLookup(body: EeEmailLookup): __Observable<EeSuccess> {
    return this.createEmailLookupResponse(body).pipe(
      __map(_r => _r.body as EeSuccess)
    );
  }

  /**
   * @param params The `EeEventAttendeesService.ListEmailLookupAttendeesParams` containing the following parameters:
   *
   * - `code`:
   *
   * - `q`:
   *
   * - `limit`: Number of items returned
   *
   * - `cursor`: Start Cursor for query
   *
   * @return OK
   */
  listEmailLookupAttendeesResponse(params: EeEventAttendeesService.ListEmailLookupAttendeesParams): __Observable<__StrictHttpResponse<EePagedEventAttendeeCode>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.q != null) __params = __params.set('q', params.q.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.cursor != null) __params = __params.set('cursor', params.cursor.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/attendees/email-lookup/${params.code}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EePagedEventAttendeeCode>;
      })
    );
  }
  /**
   * @param params The `EeEventAttendeesService.ListEmailLookupAttendeesParams` containing the following parameters:
   *
   * - `code`:
   *
   * - `q`:
   *
   * - `limit`: Number of items returned
   *
   * - `cursor`: Start Cursor for query
   *
   * @return OK
   */
  listEmailLookupAttendees(params: EeEventAttendeesService.ListEmailLookupAttendeesParams): __Observable<EePagedEventAttendeeCode> {
    return this.listEmailLookupAttendeesResponse(params).pipe(
      __map(_r => _r.body as EePagedEventAttendeeCode)
    );
  }

  /**
   * @param body Import ticket input
   * @return OK
   */
  updateAccountTicketsResponse(body: EeAttendeeImport): __Observable<__StrictHttpResponse<EePagedEventAttendee>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/attendees/account-import`,
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
   * @param body Import ticket input
   * @return OK
   */
  updateAccountTickets(body: EeAttendeeImport): __Observable<EePagedEventAttendee> {
    return this.updateAccountTicketsResponse(body).pipe(
      __map(_r => _r.body as EePagedEventAttendee)
    );
  }
}

module EeEventAttendeesService {

  /**
   * Parameters for listAttendees
   */
  export interface ListAttendeesParams {

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
   * Parameters for createAttendee
   */
  export interface CreateAttendeeParams {
    ticketId: string;

    /**
     * Event Id
     */
    eventId: string;

    /**
     * Event Id
     */
    eventId: string;

    /**
     * Attendee object to be created
     */
    attendeeProps: EeEventAttendeeUpdate;
  }

  /**
   * Parameters for exportAttendees
   */
  export interface ExportAttendeesParams {

    /**
     * Event Id
     */
    eventId: string;

    /**
     * e.g [profiledIds:edropin],[profileIds:agdontario]
     */
    facets?: string;
  }

  /**
   * Parameters for listUserAttendees
   */
  export interface ListUserAttendeesParams {
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
   * Parameters for updateAttendee
   */
  export interface UpdateAttendeeParams {

    /**
     * Attendee object that needs to be updated
     */
    attendeeProps: EeEventAttendeeUpdate;

    /**
     * Attendee Id
     */
    attendeeId: string;
  }

  /**
   * Parameters for sendAttendeeLink
   */
  export interface SendAttendeeLinkParams {

    /**
     * Send to a different email than the one associated with the account
     */
    body: EeSendLinkInput;

    /**
     * Attendee Id
     */
    attendeeId: string;
  }

  /**
   * Parameters for listEmailLookupAttendees
   */
  export interface ListEmailLookupAttendeesParams {
    code: string;
    q?: string;

    /**
     * Number of items returned
     */
    limit?: number;

    /**
     * Start Cursor for query
     */
    cursor?: string;
  }
}

export { EeEventAttendeesService }
