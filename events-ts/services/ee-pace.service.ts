/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { EePagedPACEProvider } from '../models/ee-paged-paceprovider';
import { EeDefaultError } from '../models/ee-default-error';
import { EePACEProvider } from '../models/ee-paceprovider';
import { EePACEProviderUpdate } from '../models/ee-paceprovider-update';
import { EeSuccess } from '../models/ee-success';

/**
 * AGD PACE endpoints for managing providers
 */
@Injectable({
  providedIn: 'root',
})
class EePACEService extends __BaseService {
  static readonly listProvidersPath = '/pace-providers';
  static readonly upsertPaceProviderPath = '/pace-providers/{profileId}';
  static readonly deleteProviderPath = '/pace-providers/{profileId}';
  static readonly retrieveProviderPath = '/pace-providers/{profileId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `EePACEService.ListProvidersParams` containing the following parameters:
   *
   * - `limit`: Number of items returned
   *
   * - `cursor`: Start Cursor for query
   *
   * @return Paged list of PACE Providers
   */
  listProvidersResponse(params: EePACEService.ListProvidersParams): __Observable<__StrictHttpResponse<EePagedPACEProvider>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.cursor != null) __params = __params.set('cursor', params.cursor.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/pace-providers`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EePagedPACEProvider>;
      })
    );
  }
  /**
   * @param params The `EePACEService.ListProvidersParams` containing the following parameters:
   *
   * - `limit`: Number of items returned
   *
   * - `cursor`: Start Cursor for query
   *
   * @return Paged list of PACE Providers
   */
  listProviders(params: EePACEService.ListProvidersParams): __Observable<EePagedPACEProvider> {
    return this.listProvidersResponse(params).pipe(
      __map(_r => _r.body as EePagedPACEProvider)
    );
  }

  /**
   * @param params The `EePACEService.UpsertPaceProviderParams` containing the following parameters:
   *
   * - `profileId`: Profile Id
   *
   * - `body`:
   *
   * @return PACE Provider
   */
  upsertPaceProviderResponse(params: EePACEService.UpsertPaceProviderParams): __Observable<__StrictHttpResponse<EePACEProvider>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/pace-providers/${params.profileId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EePACEProvider>;
      })
    );
  }
  /**
   * @param params The `EePACEService.UpsertPaceProviderParams` containing the following parameters:
   *
   * - `profileId`: Profile Id
   *
   * - `body`:
   *
   * @return PACE Provider
   */
  upsertPaceProvider(params: EePACEService.UpsertPaceProviderParams): __Observable<EePACEProvider> {
    return this.upsertPaceProviderResponse(params).pipe(
      __map(_r => _r.body as EePACEProvider)
    );
  }

  /**
   * @param profileId Profile Id
   * @return Delete a provider
   */
  deleteProviderResponse(profileId: string): __Observable<__StrictHttpResponse<EeSuccess>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/pace-providers/${profileId}`,
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
   * @param profileId Profile Id
   * @return Delete a provider
   */
  deleteProvider(profileId: string): __Observable<EeSuccess> {
    return this.deleteProviderResponse(profileId).pipe(
      __map(_r => _r.body as EeSuccess)
    );
  }

  /**
   * @param profileId Profile Id
   * @return Message
   */
  retrieveProviderResponse(profileId: string): __Observable<__StrictHttpResponse<EePACEProvider>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/pace-providers/${profileId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EePACEProvider>;
      })
    );
  }
  /**
   * @param profileId Profile Id
   * @return Message
   */
  retrieveProvider(profileId: string): __Observable<EePACEProvider> {
    return this.retrieveProviderResponse(profileId).pipe(
      __map(_r => _r.body as EePACEProvider)
    );
  }
}

module EePACEService {

  /**
   * Parameters for listProviders
   */
  export interface ListProvidersParams {

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
   * Parameters for upsertPaceProvider
   */
  export interface UpsertPaceProviderParams {

    /**
     * Profile Id
     */
    profileId: string;
    body?: EePACEProviderUpdate;
  }
}

export { EePACEService }
