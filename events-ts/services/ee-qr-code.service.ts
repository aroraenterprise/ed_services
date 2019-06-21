/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { EeDefaultError } from '../models/ee-default-error';

/**
 * Generate qr codes
 */
@Injectable({
  providedIn: 'root',
})
class EeQrCodeService extends __BaseService {
  static readonly getQRCodePath = '/qr-code/{data}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `EeQrCodeService.GetQRCodeParams` containing the following parameters:
   *
   * - `data`:
   *
   * - `background`:
   *
   * @return OK
   */
  getQRCodeResponse(params: EeQrCodeService.GetQRCodeParams): __Observable<__StrictHttpResponse<Blob>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.background != null) __params = __params.set('background', params.background.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/qr-code/${params.data}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'blob'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Blob>;
      })
    );
  }
  /**
   * @param params The `EeQrCodeService.GetQRCodeParams` containing the following parameters:
   *
   * - `data`:
   *
   * - `background`:
   *
   * @return OK
   */
  getQRCode(params: EeQrCodeService.GetQRCodeParams): __Observable<Blob> {
    return this.getQRCodeResponse(params).pipe(
      __map(_r => _r.body as Blob)
    );
  }
}

module EeQrCodeService {

  /**
   * Parameters for getQRCode
   */
  export interface GetQRCodeParams {
    data: string;
    background?: 'light' | 'dark';
  }
}

export { EeQrCodeService }
