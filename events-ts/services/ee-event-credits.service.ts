/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { EePagedCredit } from '../models/ee-paged-credit';
import { EeDefaultError } from '../models/ee-default-error';
import { EeCredit } from '../models/ee-credit';

/**
 * Manage eCredits
 */
@Injectable({
  providedIn: 'root',
})
class EeEventCreditsService extends __BaseService {
  static readonly listCreditsByEventPath = '/events/{eventId}/credits';
  static readonly createCreditPath = '/events/{eventId}/credits';
  static readonly retrieveCreditPath = '/credits/{creditId}';
  static readonly updateCreditPath = '/credits/{creditId}';
  static readonly deleteCreditPath = '/credits/{creditId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param eventId Event Id
   * @return Credits for the event
   */
  listCreditsByEventResponse(eventId: string): __Observable<__StrictHttpResponse<EePagedCredit>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/events/${eventId}/credits`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EePagedCredit>;
      })
    );
  }
  /**
   * @param eventId Event Id
   * @return Credits for the event
   */
  listCreditsByEvent(eventId: string): __Observable<EePagedCredit> {
    return this.listCreditsByEventResponse(eventId).pipe(
      __map(_r => _r.body as EePagedCredit)
    );
  }

  /**
   * @param params The `EeEventCreditsService.CreateCreditParams` containing the following parameters:
   *
   * - `eventId`: Event Id
   *
   * - `body`: Credit object to be created
   *
   * @return Certificate added
   */
  createCreditResponse(params: EeEventCreditsService.CreateCreditParams): __Observable<__StrictHttpResponse<EeCredit>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/events/${params.eventId}/credits`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeCredit>;
      })
    );
  }
  /**
   * @param params The `EeEventCreditsService.CreateCreditParams` containing the following parameters:
   *
   * - `eventId`: Event Id
   *
   * - `body`: Credit object to be created
   *
   * @return Certificate added
   */
  createCredit(params: EeEventCreditsService.CreateCreditParams): __Observable<EeCredit> {
    return this.createCreditResponse(params).pipe(
      __map(_r => _r.body as EeCredit)
    );
  }

  /**
   * @param creditId Credit Id
   * @return OK
   */
  retrieveCreditResponse(creditId: string): __Observable<__StrictHttpResponse<EeCredit>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/credits/${creditId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeCredit>;
      })
    );
  }
  /**
   * @param creditId Credit Id
   * @return OK
   */
  retrieveCredit(creditId: string): __Observable<EeCredit> {
    return this.retrieveCreditResponse(creditId).pipe(
      __map(_r => _r.body as EeCredit)
    );
  }

  /**
   * @param params The `EeEventCreditsService.UpdateCreditParams` containing the following parameters:
   *
   * - `creditId`: Credit Id
   *
   * - `body`: Credit to update
   *
   * @return Event Credit updated
   */
  updateCreditResponse(params: EeEventCreditsService.UpdateCreditParams): __Observable<__StrictHttpResponse<EeCredit>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/credits/${params.creditId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeCredit>;
      })
    );
  }
  /**
   * @param params The `EeEventCreditsService.UpdateCreditParams` containing the following parameters:
   *
   * - `creditId`: Credit Id
   *
   * - `body`: Credit to update
   *
   * @return Event Credit updated
   */
  updateCredit(params: EeEventCreditsService.UpdateCreditParams): __Observable<EeCredit> {
    return this.updateCreditResponse(params).pipe(
      __map(_r => _r.body as EeCredit)
    );
  }

  /**
   * @param creditId Credit Id
   * @return Credit deleted
   */
  deleteCreditResponse(creditId: string): __Observable<__StrictHttpResponse<EeCredit>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/credits/${creditId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeCredit>;
      })
    );
  }
  /**
   * @param creditId Credit Id
   * @return Credit deleted
   */
  deleteCredit(creditId: string): __Observable<EeCredit> {
    return this.deleteCreditResponse(creditId).pipe(
      __map(_r => _r.body as EeCredit)
    );
  }
}

module EeEventCreditsService {

  /**
   * Parameters for createCredit
   */
  export interface CreateCreditParams {

    /**
     * Event Id
     */
    eventId: string;

    /**
     * Credit object to be created
     */
    body: EeCredit;
  }

  /**
   * Parameters for updateCredit
   */
  export interface UpdateCreditParams {

    /**
     * Credit Id
     */
    creditId: string;

    /**
     * Credit to update
     */
    body: EeCredit;
  }
}

export { EeEventCreditsService }
