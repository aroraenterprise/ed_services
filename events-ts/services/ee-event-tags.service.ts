/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { EePagedEventTag } from '../models/ee-paged-event-tag';
import { EeDefaultError } from '../models/ee-default-error';
import { EeEventTag } from '../models/ee-event-tag';
import { EeEventTagUpsert } from '../models/ee-event-tag-upsert';
import { EeSuccess } from '../models/ee-success';
import { EePubSubMessage } from '../models/ee-pub-sub-message';

/**
 * Tagging profiles and invites in an event
 */
@Injectable({
  providedIn: 'root',
})
class EeEventTagsService extends __BaseService {
  static readonly listEventTagsPath = '/events/{eventId}/tags';
  static readonly searchTagsForEventPath = '/events/{eventId}/tags-search';
  static readonly upsertEventTagPath = '/events/{eventId}/tags/{profileId}';
  static readonly removeEventTagPath = '/event-tags/{tagId}';
  static readonly updateEventTagStatusPath = '/events/eventTagStatusUpdate';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `EeEventTagsService.ListEventTagsParams` containing the following parameters:
   *
   * - `eventId`: Event Id
   *
   * - `limit`: Number of items returned
   *
   * - `cursor`: Start Cursor for query
   *
   * @return Event Profiles
   */
  listEventTagsResponse(params: EeEventTagsService.ListEventTagsParams): __Observable<__StrictHttpResponse<EePagedEventTag>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.cursor != null) __params = __params.set('cursor', params.cursor.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/events/${params.eventId}/tags`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EePagedEventTag>;
      })
    );
  }
  /**
   * @param params The `EeEventTagsService.ListEventTagsParams` containing the following parameters:
   *
   * - `eventId`: Event Id
   *
   * - `limit`: Number of items returned
   *
   * - `cursor`: Start Cursor for query
   *
   * @return Event Profiles
   */
  listEventTags(params: EeEventTagsService.ListEventTagsParams): __Observable<EePagedEventTag> {
    return this.listEventTagsResponse(params).pipe(
      __map(_r => _r.body as EePagedEventTag)
    );
  }

  /**
   * @param params The `EeEventTagsService.SearchTagsForEventParams` containing the following parameters:
   *
   * - `eventId`: Event Id
   *
   * - `q`:
   *
   * - `limit`: Number of items returned
   *
   * - `cursor`: Start Cursor for query
   *
   * @return Event Profiles
   */
  searchTagsForEventResponse(params: EeEventTagsService.SearchTagsForEventParams): __Observable<__StrictHttpResponse<EePagedEventTag>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.q != null) __params = __params.set('q', params.q.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.cursor != null) __params = __params.set('cursor', params.cursor.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/events/${params.eventId}/tags-search`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EePagedEventTag>;
      })
    );
  }
  /**
   * @param params The `EeEventTagsService.SearchTagsForEventParams` containing the following parameters:
   *
   * - `eventId`: Event Id
   *
   * - `q`:
   *
   * - `limit`: Number of items returned
   *
   * - `cursor`: Start Cursor for query
   *
   * @return Event Profiles
   */
  searchTagsForEvent(params: EeEventTagsService.SearchTagsForEventParams): __Observable<EePagedEventTag> {
    return this.searchTagsForEventResponse(params).pipe(
      __map(_r => _r.body as EePagedEventTag)
    );
  }

  /**
   * @param params The `EeEventTagsService.UpsertEventTagParams` containing the following parameters:
   *
   * - `roleProp`: Profile role to update
   *
   * - `profileId`: Profile Id
   *
   * - `eventId`: Event Id
   *
   * @return Event Profile
   */
  upsertEventTagResponse(params: EeEventTagsService.UpsertEventTagParams): __Observable<__StrictHttpResponse<EeEventTag>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.roleProp;


    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/events/${params.eventId}/tags/${params.profileId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeEventTag>;
      })
    );
  }
  /**
   * @param params The `EeEventTagsService.UpsertEventTagParams` containing the following parameters:
   *
   * - `roleProp`: Profile role to update
   *
   * - `profileId`: Profile Id
   *
   * - `eventId`: Event Id
   *
   * @return Event Profile
   */
  upsertEventTag(params: EeEventTagsService.UpsertEventTagParams): __Observable<EeEventTag> {
    return this.upsertEventTagResponse(params).pipe(
      __map(_r => _r.body as EeEventTag)
    );
  }

  /**
   * @param tagId Tag Id
   * @return Removed profile
   */
  removeEventTagResponse(tagId: string): __Observable<__StrictHttpResponse<EeSuccess>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/event-tags/${tagId}`,
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
   * @param tagId Tag Id
   * @return Removed profile
   */
  removeEventTag(tagId: string): __Observable<EeSuccess> {
    return this.removeEventTagResponse(tagId).pipe(
      __map(_r => _r.body as EeSuccess)
    );
  }

  /**
   * @param params The `EeEventTagsService.UpdateEventTagStatusParams` containing the following parameters:
   *
   * - `subData`: Base64 encoded message
   *
   * - `apiKey`:
   *
   * @return OK
   */
  updateEventTagStatusResponse(params: EeEventTagsService.UpdateEventTagStatusParams): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.subData;
    if (params.apiKey != null) __params = __params.set('apiKey', params.apiKey.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/events/eventTagStatusUpdate`,
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
   * @param params The `EeEventTagsService.UpdateEventTagStatusParams` containing the following parameters:
   *
   * - `subData`: Base64 encoded message
   *
   * - `apiKey`:
   *
   * @return OK
   */
  updateEventTagStatus(params: EeEventTagsService.UpdateEventTagStatusParams): __Observable<string> {
    return this.updateEventTagStatusResponse(params).pipe(
      __map(_r => _r.body as string)
    );
  }
}

module EeEventTagsService {

  /**
   * Parameters for listEventTags
   */
  export interface ListEventTagsParams {

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
   * Parameters for searchTagsForEvent
   */
  export interface SearchTagsForEventParams {

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
     * Start Cursor for query
     */
    cursor?: string;
  }

  /**
   * Parameters for upsertEventTag
   */
  export interface UpsertEventTagParams {

    /**
     * Profile role to update
     */
    roleProp: EeEventTagUpsert;

    /**
     * Profile Id
     */
    profileId: string;

    /**
     * Event Id
     */
    eventId: string;
  }

  /**
   * Parameters for updateEventTagStatus
   */
  export interface UpdateEventTagStatusParams {

    /**
     * Base64 encoded message
     */
    subData: EePubSubMessage;
    apiKey: string;
  }
}

export { EeEventTagsService }
