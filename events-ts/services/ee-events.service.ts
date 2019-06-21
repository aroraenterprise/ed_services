/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { EePagedEvent } from '../models/ee-paged-event';
import { EeDefaultError } from '../models/ee-default-error';
import { EeEvent } from '../models/ee-event';
import { EeEventUpdate } from '../models/ee-event-update';
import { EeFacetSearch } from '../models/ee-facet-search';
import { EeTicketUpdate } from '../models/ee-ticket-update';

/**
 * Events
 */
@Injectable({
  providedIn: 'root',
})
class EeEventsService extends __BaseService {
  static readonly getAllEventsPath = '/events';
  static readonly createEventPath = '/events';
  static readonly getMultipleEventsPath = '/events/get-multi';
  static readonly getEventPath = '/events/{eventId}';
  static readonly updateEventPath = '/events/{eventId}';
  static readonly deleteEventPath = '/events/{eventId}';
  static readonly searchEventFacetsPath = '/events/facets/{facetName}';
  static readonly getEventCategoriesPath = '/events/categories';
  static readonly searchEventPath = '/events/search';
  static readonly searchEvent2Path = '/events/search/2';
  static readonly upsertTicketPath = '/events/{eventId}/tickets/{ticketId}';
  static readonly removeTicketPath = '/events/{eventId}/tickets/{ticketId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `EeEventsService.GetAllEventsParams` containing the following parameters:
   *
   * - `searchCoords`: Coordinates for search
   *
   * - `q`:
   *
   * - `limit`: Number of items returned
   *
   * - `filterTimestamp`: Filter by start and end time e.g. (starting after 1111 ending before 1234 = 1111,1234)
   *
   * - `facets`: e.g [profiledIds:edropin],[profileIds:agdontario]
   *
   * - `cursor`: Start Cursor for query
   *
   * @return Events
   */
  getAllEventsResponse(params: EeEventsService.GetAllEventsParams): __Observable<__StrictHttpResponse<EePagedEvent>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (params.searchCoords || []).forEach(val => {if (val != null) __params = __params.append('searchCoords', val.toString())});
    if (params.q != null) __params = __params.set('q', params.q.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    (params.filterTimestamp || []).forEach(val => {if (val != null) __params = __params.append('filterTimestamp', val.toString())});
    if (params.facets != null) __params = __params.set('facets', params.facets.toString());
    if (params.cursor != null) __params = __params.set('cursor', params.cursor.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/events`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EePagedEvent>;
      })
    );
  }
  /**
   * @param params The `EeEventsService.GetAllEventsParams` containing the following parameters:
   *
   * - `searchCoords`: Coordinates for search
   *
   * - `q`:
   *
   * - `limit`: Number of items returned
   *
   * - `filterTimestamp`: Filter by start and end time e.g. (starting after 1111 ending before 1234 = 1111,1234)
   *
   * - `facets`: e.g [profiledIds:edropin],[profileIds:agdontario]
   *
   * - `cursor`: Start Cursor for query
   *
   * @return Events
   */
  getAllEvents(params: EeEventsService.GetAllEventsParams): __Observable<EePagedEvent> {
    return this.getAllEventsResponse(params).pipe(
      __map(_r => _r.body as EePagedEvent)
    );
  }

  /**
   * @param eventProps Event object that needs to be created
   * @return Event created
   */
  createEventResponse(eventProps: EeEventUpdate): __Observable<__StrictHttpResponse<EeEvent>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = eventProps;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/events`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeEvent>;
      })
    );
  }
  /**
   * @param eventProps Event object that needs to be created
   * @return Event created
   */
  createEvent(eventProps: EeEventUpdate): __Observable<EeEvent> {
    return this.createEventResponse(eventProps).pipe(
      __map(_r => _r.body as EeEvent)
    );
  }

  /**
   * @param eventIds undefined
   * @return Event
   */
  getMultipleEventsResponse(eventIds?: Array<string>): __Observable<__StrictHttpResponse<Array<EeEvent>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (eventIds || []).forEach(val => {if (val != null) __params = __params.append('eventIds', val.toString())});
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/events/get-multi`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<EeEvent>>;
      })
    );
  }
  /**
   * @param eventIds undefined
   * @return Event
   */
  getMultipleEvents(eventIds?: Array<string>): __Observable<Array<EeEvent>> {
    return this.getMultipleEventsResponse(eventIds).pipe(
      __map(_r => _r.body as Array<EeEvent>)
    );
  }

  /**
   * @param eventId Event Id
   * @return OK
   */
  getEventResponse(eventId: string): __Observable<__StrictHttpResponse<EeEvent>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/events/${eventId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeEvent>;
      })
    );
  }
  /**
   * @param eventId Event Id
   * @return OK
   */
  getEvent(eventId: string): __Observable<EeEvent> {
    return this.getEventResponse(eventId).pipe(
      __map(_r => _r.body as EeEvent)
    );
  }

  /**
   * @param params The `EeEventsService.UpdateEventParams` containing the following parameters:
   *
   * - `eventProps`: Event object that needs to be updated
   *
   * - `eventId`: Event Id
   *
   * @return Event updated
   */
  updateEventResponse(params: EeEventsService.UpdateEventParams): __Observable<__StrictHttpResponse<EeEvent>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.eventProps;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/events/${params.eventId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeEvent>;
      })
    );
  }
  /**
   * @param params The `EeEventsService.UpdateEventParams` containing the following parameters:
   *
   * - `eventProps`: Event object that needs to be updated
   *
   * - `eventId`: Event Id
   *
   * @return Event updated
   */
  updateEvent(params: EeEventsService.UpdateEventParams): __Observable<EeEvent> {
    return this.updateEventResponse(params).pipe(
      __map(_r => _r.body as EeEvent)
    );
  }

  /**
   * @param eventId Event Id
   */
  deleteEventResponse(eventId: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/events/${eventId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param eventId Event Id
   */
  deleteEvent(eventId: string): __Observable<null> {
    return this.deleteEventResponse(eventId).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `EeEventsService.SearchEventFacetsParams` containing the following parameters:
   *
   * - `facetName`: Name of the facet
   *
   * - `startDate`:
   *
   * - `q`:
   *
   * - `limit`: Number of items returned
   *
   * - `endDate`:
   *
   * - `cursor`: Start Cursor for query
   *
   * @return Facet result
   */
  searchEventFacetsResponse(params: EeEventsService.SearchEventFacetsParams): __Observable<__StrictHttpResponse<EeFacetSearch>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.startDate != null) __params = __params.set('startDate', params.startDate.toString());
    if (params.q != null) __params = __params.set('q', params.q.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.endDate != null) __params = __params.set('endDate', params.endDate.toString());
    if (params.cursor != null) __params = __params.set('cursor', params.cursor.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/events/facets/${params.facetName}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeFacetSearch>;
      })
    );
  }
  /**
   * @param params The `EeEventsService.SearchEventFacetsParams` containing the following parameters:
   *
   * - `facetName`: Name of the facet
   *
   * - `startDate`:
   *
   * - `q`:
   *
   * - `limit`: Number of items returned
   *
   * - `endDate`:
   *
   * - `cursor`: Start Cursor for query
   *
   * @return Facet result
   */
  searchEventFacets(params: EeEventsService.SearchEventFacetsParams): __Observable<EeFacetSearch> {
    return this.searchEventFacetsResponse(params).pipe(
      __map(_r => _r.body as EeFacetSearch)
    );
  }

  /**
   * @param params The `EeEventsService.GetEventCategoriesParams` containing the following parameters:
   *
   * - `q`:
   *
   * - `limit`: Number of items returned
   *
   * - `cursor`: Start Cursor for query
   *
   * @return Categories
   */
  getEventCategoriesResponse(params: EeEventsService.GetEventCategoriesParams): __Observable<__StrictHttpResponse<EeFacetSearch>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.q != null) __params = __params.set('q', params.q.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.cursor != null) __params = __params.set('cursor', params.cursor.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/events/categories`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeFacetSearch>;
      })
    );
  }
  /**
   * @param params The `EeEventsService.GetEventCategoriesParams` containing the following parameters:
   *
   * - `q`:
   *
   * - `limit`: Number of items returned
   *
   * - `cursor`: Start Cursor for query
   *
   * @return Categories
   */
  getEventCategories(params: EeEventsService.GetEventCategoriesParams): __Observable<EeFacetSearch> {
    return this.getEventCategoriesResponse(params).pipe(
      __map(_r => _r.body as EeFacetSearch)
    );
  }

  /**
   * @param params The `EeEventsService.SearchEventParams` containing the following parameters:
   *
   * - `searchCoords`: Coordinates for search
   *
   * - `q`:
   *
   * - `limit`: Number of items returned
   *
   * - `filterTimestamp`: Filter by start and end time e.g. (starting after 1111 ending before 1234 = 1111,1234)
   *
   * - `facets`: e.g [profiledIds:edropin],[profileIds:agdontario]
   *
   * - `cursor`: Start Cursor for query
   *
   * @return Events
   */
  searchEventResponse(params: EeEventsService.SearchEventParams): __Observable<__StrictHttpResponse<EePagedEvent>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (params.searchCoords || []).forEach(val => {if (val != null) __params = __params.append('searchCoords', val.toString())});
    if (params.q != null) __params = __params.set('q', params.q.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    (params.filterTimestamp || []).forEach(val => {if (val != null) __params = __params.append('filterTimestamp', val.toString())});
    if (params.facets != null) __params = __params.set('facets', params.facets.toString());
    if (params.cursor != null) __params = __params.set('cursor', params.cursor.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/events/search`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EePagedEvent>;
      })
    );
  }
  /**
   * @param params The `EeEventsService.SearchEventParams` containing the following parameters:
   *
   * - `searchCoords`: Coordinates for search
   *
   * - `q`:
   *
   * - `limit`: Number of items returned
   *
   * - `filterTimestamp`: Filter by start and end time e.g. (starting after 1111 ending before 1234 = 1111,1234)
   *
   * - `facets`: e.g [profiledIds:edropin],[profileIds:agdontario]
   *
   * - `cursor`: Start Cursor for query
   *
   * @return Events
   */
  searchEvent(params: EeEventsService.SearchEventParams): __Observable<EePagedEvent> {
    return this.searchEventResponse(params).pipe(
      __map(_r => _r.body as EePagedEvent)
    );
  }

  /**
   * @param params The `EeEventsService.SearchEvent2Params` containing the following parameters:
   *
   * - `startDate`:
   *
   * - `q`:
   *
   * - `priceMin`:
   *
   * - `priceMax`:
   *
   * - `placeId`:
   *
   * - `limit`: Number of items returned
   *
   * - `facets`: e.g [profiledIds:edropin],[profileIds:agdontario]
   *
   * - `endDate`:
   *
   * - `cursor`: Start Cursor for query
   *
   * @return Events
   */
  searchEvent2Response(params: EeEventsService.SearchEvent2Params): __Observable<__StrictHttpResponse<EePagedEvent>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.startDate != null) __params = __params.set('startDate', params.startDate.toString());
    if (params.q != null) __params = __params.set('q', params.q.toString());
    if (params.priceMin != null) __params = __params.set('priceMin', params.priceMin.toString());
    if (params.priceMax != null) __params = __params.set('priceMax', params.priceMax.toString());
    if (params.placeId != null) __params = __params.set('placeId', params.placeId.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.facets != null) __params = __params.set('facets', params.facets.toString());
    if (params.endDate != null) __params = __params.set('endDate', params.endDate.toString());
    if (params.cursor != null) __params = __params.set('cursor', params.cursor.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/events/search/2`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EePagedEvent>;
      })
    );
  }
  /**
   * @param params The `EeEventsService.SearchEvent2Params` containing the following parameters:
   *
   * - `startDate`:
   *
   * - `q`:
   *
   * - `priceMin`:
   *
   * - `priceMax`:
   *
   * - `placeId`:
   *
   * - `limit`: Number of items returned
   *
   * - `facets`: e.g [profiledIds:edropin],[profileIds:agdontario]
   *
   * - `endDate`:
   *
   * - `cursor`: Start Cursor for query
   *
   * @return Events
   */
  searchEvent2(params: EeEventsService.SearchEvent2Params): __Observable<EePagedEvent> {
    return this.searchEvent2Response(params).pipe(
      __map(_r => _r.body as EePagedEvent)
    );
  }

  /**
   * @param params The `EeEventsService.UpsertTicketParams` containing the following parameters:
   *
   * - `ticketId`: Ticket Id
   *
   * - `eventId`: Event Id
   *
   * - `body`:
   *
   * @return Event Ticket added
   */
  upsertTicketResponse(params: EeEventsService.UpsertTicketParams): __Observable<__StrictHttpResponse<EeEvent>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/events/${params.eventId}/tickets/${params.ticketId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeEvent>;
      })
    );
  }
  /**
   * @param params The `EeEventsService.UpsertTicketParams` containing the following parameters:
   *
   * - `ticketId`: Ticket Id
   *
   * - `eventId`: Event Id
   *
   * - `body`:
   *
   * @return Event Ticket added
   */
  upsertTicket(params: EeEventsService.UpsertTicketParams): __Observable<EeEvent> {
    return this.upsertTicketResponse(params).pipe(
      __map(_r => _r.body as EeEvent)
    );
  }

  /**
   * @param params The `EeEventsService.RemoveTicketParams` containing the following parameters:
   *
   * - `ticketId`: Ticket Id
   *
   * - `eventId`: Event Id
   */
  removeTicketResponse(params: EeEventsService.RemoveTicketParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/events/${params.eventId}/tickets/${params.ticketId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `EeEventsService.RemoveTicketParams` containing the following parameters:
   *
   * - `ticketId`: Ticket Id
   *
   * - `eventId`: Event Id
   */
  removeTicket(params: EeEventsService.RemoveTicketParams): __Observable<null> {
    return this.removeTicketResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module EeEventsService {

  /**
   * Parameters for getAllEvents
   */
  export interface GetAllEventsParams {

    /**
     * Coordinates for search
     */
    searchCoords?: Array<string>;
    q?: string;

    /**
     * Number of items returned
     */
    limit?: number;

    /**
     * Filter by start and end time e.g. (starting after 1111 ending before 1234 = 1111,1234)
     */
    filterTimestamp?: Array<number>;

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
   * Parameters for updateEvent
   */
  export interface UpdateEventParams {

    /**
     * Event object that needs to be updated
     */
    eventProps: EeEventUpdate;

    /**
     * Event Id
     */
    eventId: string;
  }

  /**
   * Parameters for searchEventFacets
   */
  export interface SearchEventFacetsParams {

    /**
     * Name of the facet
     */
    facetName: string;
    startDate?: number;
    q?: string;

    /**
     * Number of items returned
     */
    limit?: number;
    endDate?: number;

    /**
     * Start Cursor for query
     */
    cursor?: string;
  }

  /**
   * Parameters for getEventCategories
   */
  export interface GetEventCategoriesParams {
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
   * Parameters for searchEvent
   */
  export interface SearchEventParams {

    /**
     * Coordinates for search
     */
    searchCoords?: Array<string>;
    q?: string;

    /**
     * Number of items returned
     */
    limit?: number;

    /**
     * Filter by start and end time e.g. (starting after 1111 ending before 1234 = 1111,1234)
     */
    filterTimestamp?: Array<number>;

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
   * Parameters for searchEvent2
   */
  export interface SearchEvent2Params {
    startDate?: number;
    q?: string;
    priceMin?: number;
    priceMax?: number;
    placeId?: string;

    /**
     * Number of items returned
     */
    limit?: number;

    /**
     * e.g [profiledIds:edropin],[profileIds:agdontario]
     */
    facets?: string;
    endDate?: number;

    /**
     * Start Cursor for query
     */
    cursor?: string;
  }

  /**
   * Parameters for upsertTicket
   */
  export interface UpsertTicketParams {

    /**
     * Ticket Id
     */
    ticketId: string;

    /**
     * Event Id
     */
    eventId: string;
    body?: EeTicketUpdate;
  }

  /**
   * Parameters for removeTicket
   */
  export interface RemoveTicketParams {

    /**
     * Ticket Id
     */
    ticketId: string;

    /**
     * Event Id
     */
    eventId: string;
  }
}

export { EeEventsService }
