/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { EePagedKiosk } from '../models/ee-paged-kiosk';
import { EeDefaultError } from '../models/ee-default-error';
import { EeKiosk } from '../models/ee-kiosk';
import { EeKioskUpdate } from '../models/ee-kiosk-update';

/**
 * Self-serve kiosks
 */
@Injectable({
  providedIn: 'root',
})
class EeKioskService extends __BaseService {
  static readonly listAllKiosksPath = '/kiosks';
  static readonly activateKioskPath = '/kiosks';
  static readonly deactivateKioskPath = '/kiosks';
  static readonly getKioskPath = '/kiosks/{kioskId}';
  static readonly linkKioskPath = '/kiosks/{kioskId}';
  static readonly unlinkKioskPath = '/kiosks/{kioskId}/unlink';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `EeKioskService.ListAllKiosksParams` containing the following parameters:
   *
   * - `q`:
   *
   * - `limit`: Number of items returned
   *
   * - `facets`: e.g [profiledIds:edropin],[profileIds:agdontario]
   *
   * - `cursor`: Start Cursor for query
   *
   * @return Paged list of kiosks
   */
  listAllKiosksResponse(params: EeKioskService.ListAllKiosksParams): __Observable<__StrictHttpResponse<EePagedKiosk>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.q != null) __params = __params.set('q', params.q.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.facets != null) __params = __params.set('facets', params.facets.toString());
    if (params.cursor != null) __params = __params.set('cursor', params.cursor.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/kiosks`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EePagedKiosk>;
      })
    );
  }
  /**
   * @param params The `EeKioskService.ListAllKiosksParams` containing the following parameters:
   *
   * - `q`:
   *
   * - `limit`: Number of items returned
   *
   * - `facets`: e.g [profiledIds:edropin],[profileIds:agdontario]
   *
   * - `cursor`: Start Cursor for query
   *
   * @return Paged list of kiosks
   */
  listAllKiosks(params: EeKioskService.ListAllKiosksParams): __Observable<EePagedKiosk> {
    return this.listAllKiosksResponse(params).pipe(
      __map(_r => _r.body as EePagedKiosk)
    );
  }

  /**
   * @return Kiosk activated
   */
  activateKioskResponse(): __Observable<__StrictHttpResponse<EeKiosk>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/kiosks`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeKiosk>;
      })
    );
  }
  /**
   * @return Kiosk activated
   */
  activateKiosk(): __Observable<EeKiosk> {
    return this.activateKioskResponse().pipe(
      __map(_r => _r.body as EeKiosk)
    );
  }

  /**
   * @return Kiosk deactivated
   */
  deactivateKioskResponse(): __Observable<__StrictHttpResponse<EeKiosk>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/kiosks`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeKiosk>;
      })
    );
  }
  /**
   * @return Kiosk deactivated
   */
  deactivateKiosk(): __Observable<EeKiosk> {
    return this.deactivateKioskResponse().pipe(
      __map(_r => _r.body as EeKiosk)
    );
  }

  /**
   * @param kioskId Kiosk Id
   * @return OK
   */
  getKioskResponse(kioskId: string): __Observable<__StrictHttpResponse<EeKiosk>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/kiosks/${kioskId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeKiosk>;
      })
    );
  }
  /**
   * @param kioskId Kiosk Id
   * @return OK
   */
  getKiosk(kioskId: string): __Observable<EeKiosk> {
    return this.getKioskResponse(kioskId).pipe(
      __map(_r => _r.body as EeKiosk)
    );
  }

  /**
   * @param params The `EeKioskService.LinkKioskParams` containing the following parameters:
   *
   * - `kioskId`: Kiosk Id
   *
   * - `kioskProps`: Kiosk object that needs to be linked
   *
   * @return Kiosk linked
   */
  linkKioskResponse(params: EeKioskService.LinkKioskParams): __Observable<__StrictHttpResponse<EeKiosk>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.kioskProps;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/kiosks/${params.kioskId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeKiosk>;
      })
    );
  }
  /**
   * @param params The `EeKioskService.LinkKioskParams` containing the following parameters:
   *
   * - `kioskId`: Kiosk Id
   *
   * - `kioskProps`: Kiosk object that needs to be linked
   *
   * @return Kiosk linked
   */
  linkKiosk(params: EeKioskService.LinkKioskParams): __Observable<EeKiosk> {
    return this.linkKioskResponse(params).pipe(
      __map(_r => _r.body as EeKiosk)
    );
  }

  /**
   * @param kioskId Kiosk Id
   * @return Unlink a kiosk
   */
  unlinkKioskResponse(kioskId: string): __Observable<__StrictHttpResponse<EeKiosk>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/kiosks/${kioskId}/unlink`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeKiosk>;
      })
    );
  }
  /**
   * @param kioskId Kiosk Id
   * @return Unlink a kiosk
   */
  unlinkKiosk(kioskId: string): __Observable<EeKiosk> {
    return this.unlinkKioskResponse(kioskId).pipe(
      __map(_r => _r.body as EeKiosk)
    );
  }
}

module EeKioskService {

  /**
   * Parameters for listAllKiosks
   */
  export interface ListAllKiosksParams {
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
   * Parameters for linkKiosk
   */
  export interface LinkKioskParams {

    /**
     * Kiosk Id
     */
    kioskId: string;

    /**
     * Kiosk object that needs to be linked
     */
    kioskProps?: EeKioskUpdate;
  }
}

export { EeKioskService }
