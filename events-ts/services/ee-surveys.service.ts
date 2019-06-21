/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { EeSurvey } from '../models/ee-survey';
import { EeDefaultError } from '../models/ee-default-error';
import { EeSurveyUpdate } from '../models/ee-survey-update';
import { EePagedSurveyResponse } from '../models/ee-paged-survey-response';
import { EeSurveyResponse } from '../models/ee-survey-response';
import { EeSurveyResponseInput } from '../models/ee-survey-response-input';
import { EePagedSurvey } from '../models/ee-paged-survey';
import { EePagedSurveyAggregate } from '../models/ee-paged-survey-aggregate';
import { EePagedResponse } from '../models/ee-paged-response';
import { EeDeleteResponse } from '../models/ee-delete-response';

/**
 * Manage surveys
 */
@Injectable({
  providedIn: 'root',
})
class EeSurveysService extends __BaseService {
  static readonly createSurveyPath = '/events/{eventId}/surveys';
  static readonly retrieveSurveyPath = '/surveys/{surveyId}';
  static readonly updateSurveyPath = '/surveys/{surveyId}';
  static readonly deleteSurveyPath = '/surveys/{surveyId}';
  static readonly listSurveyResponsesPath = '/surveys/{surveyId}/responses';
  static readonly bulkCreateResponsesPath = '/surveys/{surveyId}/responses';
  static readonly bulkRetrieveSurveysPath = '/surveys/bulk';
  static readonly bulkRetrieveAggregatesPath = '/surveys-aggregates/bulk';
  static readonly bulkRetrieveResponsesPath = '/surveys-responses/bulk';
  static readonly bulkDeleteResponsesPath = '/surveys-responses/bulk';
  static readonly listSurveysPath = '/organizers/{organizerId}/surveys';
  static readonly listResponsesPath = '/organizers/{organizerId}/survey-responses';
  static readonly retrieveResponsePath = '/surveys-responses/get-multi';
  static readonly createResponsePath = '/survey-responses/{surveyId}';
  static readonly retrieveSurveyAggregatePath = '/surveys-aggregate/get-multi';
  static readonly retrieveAllSurveysPath = '/surveys/get-multi';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `EeSurveysService.CreateSurveyParams` containing the following parameters:
   *
   * - `eventId`: Event Id
   *
   * - `body`: Survey questions
   *
   * @return Creates a survey
   */
  createSurveyResponse(params: EeSurveysService.CreateSurveyParams): __Observable<__StrictHttpResponse<EeSurvey>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/events/${params.eventId}/surveys`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeSurvey>;
      })
    );
  }
  /**
   * @param params The `EeSurveysService.CreateSurveyParams` containing the following parameters:
   *
   * - `eventId`: Event Id
   *
   * - `body`: Survey questions
   *
   * @return Creates a survey
   */
  createSurvey(params: EeSurveysService.CreateSurveyParams): __Observable<EeSurvey> {
    return this.createSurveyResponse(params).pipe(
      __map(_r => _r.body as EeSurvey)
    );
  }

  /**
   * @param surveyId Survey Id
   * @return Retrieves the survey with the given surveyID
   */
  retrieveSurveyResponse(surveyId: string): __Observable<__StrictHttpResponse<EeSurvey>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/surveys/${surveyId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeSurvey>;
      })
    );
  }
  /**
   * @param surveyId Survey Id
   * @return Retrieves the survey with the given surveyID
   */
  retrieveSurvey(surveyId: string): __Observable<EeSurvey> {
    return this.retrieveSurveyResponse(surveyId).pipe(
      __map(_r => _r.body as EeSurvey)
    );
  }

  /**
   * @param params The `EeSurveysService.UpdateSurveyParams` containing the following parameters:
   *
   * - `surveyId`: Survey Id
   *
   * - `body`: Survey questions
   *
   * @return Creates a survey
   */
  updateSurveyResponse(params: EeSurveysService.UpdateSurveyParams): __Observable<__StrictHttpResponse<EeSurvey>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/surveys/${params.surveyId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeSurvey>;
      })
    );
  }
  /**
   * @param params The `EeSurveysService.UpdateSurveyParams` containing the following parameters:
   *
   * - `surveyId`: Survey Id
   *
   * - `body`: Survey questions
   *
   * @return Creates a survey
   */
  updateSurvey(params: EeSurveysService.UpdateSurveyParams): __Observable<EeSurvey> {
    return this.updateSurveyResponse(params).pipe(
      __map(_r => _r.body as EeSurvey)
    );
  }

  /**
   * @param surveyId Survey Id
   * @return Survey
   */
  deleteSurveyResponse(surveyId: string): __Observable<__StrictHttpResponse<EeSurvey>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/surveys/${surveyId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeSurvey>;
      })
    );
  }
  /**
   * @param surveyId Survey Id
   * @return Survey
   */
  deleteSurvey(surveyId: string): __Observable<EeSurvey> {
    return this.deleteSurveyResponse(surveyId).pipe(
      __map(_r => _r.body as EeSurvey)
    );
  }

  /**
   * @param params The `EeSurveysService.ListSurveyResponsesParams` containing the following parameters:
   *
   * - `surveyId`: Survey Id
   *
   * - `limit`: Number of items returned
   *
   * - `cursor`: Start Cursor for query
   *
   * @return Paginated list of responses for a survey
   */
  listSurveyResponsesResponse(params: EeSurveysService.ListSurveyResponsesParams): __Observable<__StrictHttpResponse<EePagedSurveyResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.cursor != null) __params = __params.set('cursor', params.cursor.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/surveys/${params.surveyId}/responses`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EePagedSurveyResponse>;
      })
    );
  }
  /**
   * @param params The `EeSurveysService.ListSurveyResponsesParams` containing the following parameters:
   *
   * - `surveyId`: Survey Id
   *
   * - `limit`: Number of items returned
   *
   * - `cursor`: Start Cursor for query
   *
   * @return Paginated list of responses for a survey
   */
  listSurveyResponses(params: EeSurveysService.ListSurveyResponsesParams): __Observable<EePagedSurveyResponse> {
    return this.listSurveyResponsesResponse(params).pipe(
      __map(_r => _r.body as EePagedSurveyResponse)
    );
  }

  /**
   * @param params The `EeSurveysService.BulkCreateResponsesParams` containing the following parameters:
   *
   * - `surveyId`: Survey Id
   *
   * - `body`:
   *
   * @return Survey responses with claim code
   */
  bulkCreateResponsesResponse(params: EeSurveysService.BulkCreateResponsesParams): __Observable<__StrictHttpResponse<EeSurveyResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/surveys/${params.surveyId}/responses`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeSurveyResponse>;
      })
    );
  }
  /**
   * @param params The `EeSurveysService.BulkCreateResponsesParams` containing the following parameters:
   *
   * - `surveyId`: Survey Id
   *
   * - `body`:
   *
   * @return Survey responses with claim code
   */
  bulkCreateResponses(params: EeSurveysService.BulkCreateResponsesParams): __Observable<EeSurveyResponse> {
    return this.bulkCreateResponsesResponse(params).pipe(
      __map(_r => _r.body as EeSurveyResponse)
    );
  }

  /**
   * @param surveyIds undefined
   * @return Retrieves the surveys with the given surveyIds
   */
  bulkRetrieveSurveysResponse(surveyIds?: Array<string>): __Observable<__StrictHttpResponse<EePagedSurvey>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (surveyIds || []).forEach(val => {if (val != null) __params = __params.append('surveyIds', val.toString())});
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/surveys/bulk`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EePagedSurvey>;
      })
    );
  }
  /**
   * @param surveyIds undefined
   * @return Retrieves the surveys with the given surveyIds
   */
  bulkRetrieveSurveys(surveyIds?: Array<string>): __Observable<EePagedSurvey> {
    return this.bulkRetrieveSurveysResponse(surveyIds).pipe(
      __map(_r => _r.body as EePagedSurvey)
    );
  }

  /**
   * @param surveyIds undefined
   * @return Retrieves the aggregates with the given surveyIds
   */
  bulkRetrieveAggregatesResponse(surveyIds?: Array<string>): __Observable<__StrictHttpResponse<EePagedSurveyAggregate>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (surveyIds || []).forEach(val => {if (val != null) __params = __params.append('surveyIds', val.toString())});
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/surveys-aggregates/bulk`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EePagedSurveyAggregate>;
      })
    );
  }
  /**
   * @param surveyIds undefined
   * @return Retrieves the aggregates with the given surveyIds
   */
  bulkRetrieveAggregates(surveyIds?: Array<string>): __Observable<EePagedSurveyAggregate> {
    return this.bulkRetrieveAggregatesResponse(surveyIds).pipe(
      __map(_r => _r.body as EePagedSurveyAggregate)
    );
  }

  /**
   * @param responseIds undefined
   * @return Retrieves the survey responses with the given responseIds
   */
  bulkRetrieveResponsesResponse(responseIds?: Array<string>): __Observable<__StrictHttpResponse<EePagedResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (responseIds || []).forEach(val => {if (val != null) __params = __params.append('responseIds', val.toString())});
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/surveys-responses/bulk`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EePagedResponse>;
      })
    );
  }
  /**
   * @param responseIds undefined
   * @return Retrieves the survey responses with the given responseIds
   */
  bulkRetrieveResponses(responseIds?: Array<string>): __Observable<EePagedResponse> {
    return this.bulkRetrieveResponsesResponse(responseIds).pipe(
      __map(_r => _r.body as EePagedResponse)
    );
  }

  /**
   * @param responseIds undefined
   * @return Successfully deleted responses
   */
  bulkDeleteResponsesResponse(responseIds?: Array<string>): __Observable<__StrictHttpResponse<EeDeleteResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (responseIds || []).forEach(val => {if (val != null) __params = __params.append('responseIds', val.toString())});
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/surveys-responses/bulk`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeDeleteResponse>;
      })
    );
  }
  /**
   * @param responseIds undefined
   * @return Successfully deleted responses
   */
  bulkDeleteResponses(responseIds?: Array<string>): __Observable<EeDeleteResponse> {
    return this.bulkDeleteResponsesResponse(responseIds).pipe(
      __map(_r => _r.body as EeDeleteResponse)
    );
  }

  /**
   * @param params The `EeSurveysService.ListSurveysParams` containing the following parameters:
   *
   * - `organizerId`:
   *
   * - `limit`: Number of items returned
   *
   * - `itemType`:
   *
   * - `item`:
   *
   * - `cursor`: Start Cursor for query
   *
   * - `categoryId`:
   *
   * - `category`:
   *
   * @return Paged list of Surveys
   */
  listSurveysResponse(params: EeSurveysService.ListSurveysParams): __Observable<__StrictHttpResponse<EePagedSurvey>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.itemType != null) __params = __params.set('itemType', params.itemType.toString());
    if (params.item != null) __params = __params.set('item', params.item.toString());
    if (params.cursor != null) __params = __params.set('cursor', params.cursor.toString());
    if (params.categoryId != null) __params = __params.set('categoryId', params.categoryId.toString());
    if (params.category != null) __params = __params.set('category', params.category.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/organizers/${params.organizerId}/surveys`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EePagedSurvey>;
      })
    );
  }
  /**
   * @param params The `EeSurveysService.ListSurveysParams` containing the following parameters:
   *
   * - `organizerId`:
   *
   * - `limit`: Number of items returned
   *
   * - `itemType`:
   *
   * - `item`:
   *
   * - `cursor`: Start Cursor for query
   *
   * - `categoryId`:
   *
   * - `category`:
   *
   * @return Paged list of Surveys
   */
  listSurveys(params: EeSurveysService.ListSurveysParams): __Observable<EePagedSurvey> {
    return this.listSurveysResponse(params).pipe(
      __map(_r => _r.body as EePagedSurvey)
    );
  }

  /**
   * @param params The `EeSurveysService.ListResponsesParams` containing the following parameters:
   *
   * - `organizerId`:
   *
   * - `surveyId`:
   *
   * - `itemType`:
   *
   * - `item`:
   *
   * - `categoryId`:
   *
   * - `category`:
   *
   * @return Retrieves the survey response with the given surveyId for the current user
   */
  listResponsesResponse(params: EeSurveysService.ListResponsesParams): __Observable<__StrictHttpResponse<EeSurveyResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.surveyId != null) __params = __params.set('surveyId', params.surveyId.toString());
    if (params.itemType != null) __params = __params.set('itemType', params.itemType.toString());
    if (params.item != null) __params = __params.set('item', params.item.toString());
    if (params.categoryId != null) __params = __params.set('categoryId', params.categoryId.toString());
    if (params.category != null) __params = __params.set('category', params.category.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/organizers/${params.organizerId}/survey-responses`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeSurveyResponse>;
      })
    );
  }
  /**
   * @param params The `EeSurveysService.ListResponsesParams` containing the following parameters:
   *
   * - `organizerId`:
   *
   * - `surveyId`:
   *
   * - `itemType`:
   *
   * - `item`:
   *
   * - `categoryId`:
   *
   * - `category`:
   *
   * @return Retrieves the survey response with the given surveyId for the current user
   */
  listResponses(params: EeSurveysService.ListResponsesParams): __Observable<EeSurveyResponse> {
    return this.listResponsesResponse(params).pipe(
      __map(_r => _r.body as EeSurveyResponse)
    );
  }

  /**
   * @param responseIds undefined
   * @return Retrieves the survey responses with the given responseIds
   */
  retrieveResponseResponse(responseIds?: Array<string>): __Observable<__StrictHttpResponse<EeSurveyResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (responseIds || []).forEach(val => {if (val != null) __params = __params.append('responseIds', val.toString())});
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/surveys-responses/get-multi`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeSurveyResponse>;
      })
    );
  }
  /**
   * @param responseIds undefined
   * @return Retrieves the survey responses with the given responseIds
   */
  retrieveResponse(responseIds?: Array<string>): __Observable<EeSurveyResponse> {
    return this.retrieveResponseResponse(responseIds).pipe(
      __map(_r => _r.body as EeSurveyResponse)
    );
  }

  /**
   * @param params The `EeSurveysService.CreateResponseParams` containing the following parameters:
   *
   * - `surveyId`: Survey Id
   *
   * - `body`:
   *
   * @return Survey responses with claim code
   */
  createResponseResponse(params: EeSurveysService.CreateResponseParams): __Observable<__StrictHttpResponse<EeSurveyResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/survey-responses/${params.surveyId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeSurveyResponse>;
      })
    );
  }
  /**
   * @param params The `EeSurveysService.CreateResponseParams` containing the following parameters:
   *
   * - `surveyId`: Survey Id
   *
   * - `body`:
   *
   * @return Survey responses with claim code
   */
  createResponse(params: EeSurveysService.CreateResponseParams): __Observable<EeSurveyResponse> {
    return this.createResponseResponse(params).pipe(
      __map(_r => _r.body as EeSurveyResponse)
    );
  }

  /**
   * @param surveyIds undefined
   * @return Retrieves the survey with the given surveyID
   */
  retrieveSurveyAggregateResponse(surveyIds?: Array<string>): __Observable<__StrictHttpResponse<EePagedSurveyAggregate>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (surveyIds || []).forEach(val => {if (val != null) __params = __params.append('surveyIds', val.toString())});
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/surveys-aggregate/get-multi`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EePagedSurveyAggregate>;
      })
    );
  }
  /**
   * @param surveyIds undefined
   * @return Retrieves the survey with the given surveyID
   */
  retrieveSurveyAggregate(surveyIds?: Array<string>): __Observable<EePagedSurveyAggregate> {
    return this.retrieveSurveyAggregateResponse(surveyIds).pipe(
      __map(_r => _r.body as EePagedSurveyAggregate)
    );
  }

  /**
   * @param surveyIds undefined
   * @return Retrieve as paged survey
   */
  retrieveAllSurveysResponse(surveyIds?: Array<string>): __Observable<__StrictHttpResponse<EePagedSurvey>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (surveyIds || []).forEach(val => {if (val != null) __params = __params.append('surveyIds', val.toString())});
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/surveys/get-multi`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EePagedSurvey>;
      })
    );
  }
  /**
   * @param surveyIds undefined
   * @return Retrieve as paged survey
   */
  retrieveAllSurveys(surveyIds?: Array<string>): __Observable<EePagedSurvey> {
    return this.retrieveAllSurveysResponse(surveyIds).pipe(
      __map(_r => _r.body as EePagedSurvey)
    );
  }
}

module EeSurveysService {

  /**
   * Parameters for createSurvey
   */
  export interface CreateSurveyParams {

    /**
     * Event Id
     */
    eventId: string;

    /**
     * Survey questions
     */
    body: EeSurveyUpdate;
  }

  /**
   * Parameters for updateSurvey
   */
  export interface UpdateSurveyParams {

    /**
     * Survey Id
     */
    surveyId: string;

    /**
     * Survey questions
     */
    body: EeSurveyUpdate;
  }

  /**
   * Parameters for listSurveyResponses
   */
  export interface ListSurveyResponsesParams {

    /**
     * Survey Id
     */
    surveyId: string;

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
   * Parameters for bulkCreateResponses
   */
  export interface BulkCreateResponsesParams {

    /**
     * Survey Id
     */
    surveyId: string;
    body?: EeSurveyResponseInput;
  }

  /**
   * Parameters for listSurveys
   */
  export interface ListSurveysParams {
    organizerId: string;

    /**
     * Number of items returned
     */
    limit?: number;
    itemType?: string;
    item?: string;

    /**
     * Start Cursor for query
     */
    cursor?: string;
    categoryId?: string;
    category?: string;
  }

  /**
   * Parameters for listResponses
   */
  export interface ListResponsesParams {
    organizerId: string;
    surveyId?: string;
    itemType?: string;
    item?: string;
    categoryId?: string;
    category?: string;
  }

  /**
   * Parameters for createResponse
   */
  export interface CreateResponseParams {

    /**
     * Survey Id
     */
    surveyId: string;
    body?: EeSurveyResponseInput;
  }
}

export { EeSurveysService }
