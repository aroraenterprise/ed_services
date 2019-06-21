/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { EePagedEventCertificate } from '../models/ee-paged-event-certificate';
import { EeDefaultError } from '../models/ee-default-error';
import { EeEventCertificate } from '../models/ee-event-certificate';
import { EeEventCertificateUpdate } from '../models/ee-event-certificate-update';
import { EeEventCertificatePreview } from '../models/ee-event-certificate-preview';
import { EeCertificateRuleInput } from '../models/ee-certificate-rule-input';
import { EePagedEventAttendee } from '../models/ee-paged-event-attendee';
import { EeAttendeeCertificate } from '../models/ee-attendee-certificate';
import { EePagedEventCertificateTemplate } from '../models/ee-paged-event-certificate-template';
import { EeUserCertificate } from '../models/ee-user-certificate';
import { EeUserCertificateUpdate } from '../models/ee-user-certificate-update';
import { EeCertificateInspect } from '../models/ee-certificate-inspect';

/**
 * Manage eCertificates - creation, update and deletion and assigning to attendees
 */
@Injectable({
  providedIn: 'root',
})
class EeEventCertificatesService extends __BaseService {
  static readonly listCertificatesByProfilePath = '/profiles/{profileId}/certificates';
  static readonly listCertificatesPath = '/events/{eventId}/certificates';
  static readonly createCertificatePath = '/events/{eventId}/certificates';
  static readonly retrieveCertificatePath = '/certificates/{certificateId}';
  static readonly updateCertificatePath = '/certificates/{certificateId}';
  static readonly deleteCertificatePath = '/certificates/{certificateId}';
  static readonly previewCertificatePath = '/certificates/{certificateId}/preview';
  static readonly upsertAssignmentRulePath = '/certificates/{certificateId}/rules';
  static readonly createAttendeeCertificatePath = '/certificates/{certificateId}/attendees';
  static readonly deleteAttendeeCertificatePath = '/certificates/{certificateId}/attendees';
  static readonly downloadCertificatePath = '/certificates/download/{certificateCode}';
  static readonly listCertificateTemplatesPath = '/certificate-templates';
  static readonly retrieveUserCertificatePath = '/certificates/{certificateId}/attendees/{attendeeId}';
  static readonly updateUserCertificatePath = '/certificates/{certificateId}/attendees/{attendeeId}';
  static readonly inspectTemplatePath = '/certificates/inspectTemplate';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `EeEventCertificatesService.ListCertificatesByProfileParams` containing the following parameters:
   *
   * - `profileId`: Profile Id
   *
   * - `q`:
   *
   * - `limit`: Number of items returned
   *
   * - `facets`: e.g [profiledIds:edropin],[profileIds:agdontario]
   *
   * - `cursor`: Start Cursor for query
   *
   * @return Certificates in the profile
   */
  listCertificatesByProfileResponse(params: EeEventCertificatesService.ListCertificatesByProfileParams): __Observable<__StrictHttpResponse<EePagedEventCertificate>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.q != null) __params = __params.set('q', params.q.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.facets != null) __params = __params.set('facets', params.facets.toString());
    if (params.cursor != null) __params = __params.set('cursor', params.cursor.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/profiles/${params.profileId}/certificates`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EePagedEventCertificate>;
      })
    );
  }
  /**
   * @param params The `EeEventCertificatesService.ListCertificatesByProfileParams` containing the following parameters:
   *
   * - `profileId`: Profile Id
   *
   * - `q`:
   *
   * - `limit`: Number of items returned
   *
   * - `facets`: e.g [profiledIds:edropin],[profileIds:agdontario]
   *
   * - `cursor`: Start Cursor for query
   *
   * @return Certificates in the profile
   */
  listCertificatesByProfile(params: EeEventCertificatesService.ListCertificatesByProfileParams): __Observable<EePagedEventCertificate> {
    return this.listCertificatesByProfileResponse(params).pipe(
      __map(_r => _r.body as EePagedEventCertificate)
    );
  }

  /**
   * @param params The `EeEventCertificatesService.ListCertificatesParams` containing the following parameters:
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
   * @return Certificates for the event
   */
  listCertificatesResponse(params: EeEventCertificatesService.ListCertificatesParams): __Observable<__StrictHttpResponse<EePagedEventCertificate>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.q != null) __params = __params.set('q', params.q.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.facets != null) __params = __params.set('facets', params.facets.toString());
    if (params.cursor != null) __params = __params.set('cursor', params.cursor.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/events/${params.eventId}/certificates`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EePagedEventCertificate>;
      })
    );
  }
  /**
   * @param params The `EeEventCertificatesService.ListCertificatesParams` containing the following parameters:
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
   * @return Certificates for the event
   */
  listCertificates(params: EeEventCertificatesService.ListCertificatesParams): __Observable<EePagedEventCertificate> {
    return this.listCertificatesResponse(params).pipe(
      __map(_r => _r.body as EePagedEventCertificate)
    );
  }

  /**
   * @param params The `EeEventCertificatesService.CreateCertificateParams` containing the following parameters:
   *
   * - `eventId`: Event Id
   *
   * - `body`: Certificate object to be created
   *
   * @return Certificate added
   */
  createCertificateResponse(params: EeEventCertificatesService.CreateCertificateParams): __Observable<__StrictHttpResponse<EeEventCertificate>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/events/${params.eventId}/certificates`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeEventCertificate>;
      })
    );
  }
  /**
   * @param params The `EeEventCertificatesService.CreateCertificateParams` containing the following parameters:
   *
   * - `eventId`: Event Id
   *
   * - `body`: Certificate object to be created
   *
   * @return Certificate added
   */
  createCertificate(params: EeEventCertificatesService.CreateCertificateParams): __Observable<EeEventCertificate> {
    return this.createCertificateResponse(params).pipe(
      __map(_r => _r.body as EeEventCertificate)
    );
  }

  /**
   * @param certificateId Certificate Id
   * @return OK
   */
  retrieveCertificateResponse(certificateId: string): __Observable<__StrictHttpResponse<EeEventCertificate>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/certificates/${certificateId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeEventCertificate>;
      })
    );
  }
  /**
   * @param certificateId Certificate Id
   * @return OK
   */
  retrieveCertificate(certificateId: string): __Observable<EeEventCertificate> {
    return this.retrieveCertificateResponse(certificateId).pipe(
      __map(_r => _r.body as EeEventCertificate)
    );
  }

  /**
   * @param params The `EeEventCertificatesService.UpdateCertificateParams` containing the following parameters:
   *
   * - `certificateId`: Certificate Id
   *
   * - `body`: Certificate to update
   *
   * @return Event Certificate updated
   */
  updateCertificateResponse(params: EeEventCertificatesService.UpdateCertificateParams): __Observable<__StrictHttpResponse<EeEventCertificate>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/certificates/${params.certificateId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeEventCertificate>;
      })
    );
  }
  /**
   * @param params The `EeEventCertificatesService.UpdateCertificateParams` containing the following parameters:
   *
   * - `certificateId`: Certificate Id
   *
   * - `body`: Certificate to update
   *
   * @return Event Certificate updated
   */
  updateCertificate(params: EeEventCertificatesService.UpdateCertificateParams): __Observable<EeEventCertificate> {
    return this.updateCertificateResponse(params).pipe(
      __map(_r => _r.body as EeEventCertificate)
    );
  }

  /**
   * @param certificateId Certificate Id
   * @return Certificate deleted
   */
  deleteCertificateResponse(certificateId: string): __Observable<__StrictHttpResponse<EeEventCertificate>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/certificates/${certificateId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeEventCertificate>;
      })
    );
  }
  /**
   * @param certificateId Certificate Id
   * @return Certificate deleted
   */
  deleteCertificate(certificateId: string): __Observable<EeEventCertificate> {
    return this.deleteCertificateResponse(certificateId).pipe(
      __map(_r => _r.body as EeEventCertificate)
    );
  }

  /**
   * @param params The `EeEventCertificatesService.PreviewCertificateParams` containing the following parameters:
   *
   * - `certificateId`: Certificate Id
   *
   * - `body`: Data to preview certificate
   *
   * @return Event Certificate preview
   */
  previewCertificateResponse(params: EeEventCertificatesService.PreviewCertificateParams): __Observable<__StrictHttpResponse<EeEventCertificatePreview>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/certificates/${params.certificateId}/preview`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeEventCertificatePreview>;
      })
    );
  }
  /**
   * @param params The `EeEventCertificatesService.PreviewCertificateParams` containing the following parameters:
   *
   * - `certificateId`: Certificate Id
   *
   * - `body`: Data to preview certificate
   *
   * @return Event Certificate preview
   */
  previewCertificate(params: EeEventCertificatesService.PreviewCertificateParams): __Observable<EeEventCertificatePreview> {
    return this.previewCertificateResponse(params).pipe(
      __map(_r => _r.body as EeEventCertificatePreview)
    );
  }

  /**
   * @param params The `EeEventCertificatesService.UpsertAssignmentRuleParams` containing the following parameters:
   *
   * - `certificateId`: Certificate Id
   *
   * - `body`: Rules for certificate assignment
   *
   * @return Certificate rules assigned
   */
  upsertAssignmentRuleResponse(params: EeEventCertificatesService.UpsertAssignmentRuleParams): __Observable<__StrictHttpResponse<EeEventCertificate>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/certificates/${params.certificateId}/rules`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeEventCertificate>;
      })
    );
  }
  /**
   * @param params The `EeEventCertificatesService.UpsertAssignmentRuleParams` containing the following parameters:
   *
   * - `certificateId`: Certificate Id
   *
   * - `body`: Rules for certificate assignment
   *
   * @return Certificate rules assigned
   */
  upsertAssignmentRule(params: EeEventCertificatesService.UpsertAssignmentRuleParams): __Observable<EeEventCertificate> {
    return this.upsertAssignmentRuleResponse(params).pipe(
      __map(_r => _r.body as EeEventCertificate)
    );
  }

  /**
   * @param params The `EeEventCertificatesService.CreateAttendeeCertificateParams` containing the following parameters:
   *
   * - `certificateId`: Certificate Id
   *
   * - `attendeeIds`:
   *
   * @return Certificate assigned
   */
  createAttendeeCertificateResponse(params: EeEventCertificatesService.CreateAttendeeCertificateParams): __Observable<__StrictHttpResponse<EePagedEventAttendee>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    (params.attendeeIds || []).forEach(val => {if (val != null) __params = __params.append('attendeeIds', val.toString())});
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/certificates/${params.certificateId}/attendees`,
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
   * @param params The `EeEventCertificatesService.CreateAttendeeCertificateParams` containing the following parameters:
   *
   * - `certificateId`: Certificate Id
   *
   * - `attendeeIds`:
   *
   * @return Certificate assigned
   */
  createAttendeeCertificate(params: EeEventCertificatesService.CreateAttendeeCertificateParams): __Observable<EePagedEventAttendee> {
    return this.createAttendeeCertificateResponse(params).pipe(
      __map(_r => _r.body as EePagedEventAttendee)
    );
  }

  /**
   * @param params The `EeEventCertificatesService.DeleteAttendeeCertificateParams` containing the following parameters:
   *
   * - `certificateId`: Certificate Id
   *
   * - `attendeeIds`:
   *
   * @return Certificate removed
   */
  deleteAttendeeCertificateResponse(params: EeEventCertificatesService.DeleteAttendeeCertificateParams): __Observable<__StrictHttpResponse<EePagedEventAttendee>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    (params.attendeeIds || []).forEach(val => {if (val != null) __params = __params.append('attendeeIds', val.toString())});
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/certificates/${params.certificateId}/attendees`,
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
   * @param params The `EeEventCertificatesService.DeleteAttendeeCertificateParams` containing the following parameters:
   *
   * - `certificateId`: Certificate Id
   *
   * - `attendeeIds`:
   *
   * @return Certificate removed
   */
  deleteAttendeeCertificate(params: EeEventCertificatesService.DeleteAttendeeCertificateParams): __Observable<EePagedEventAttendee> {
    return this.deleteAttendeeCertificateResponse(params).pipe(
      __map(_r => _r.body as EePagedEventAttendee)
    );
  }

  /**
   * @param certificateCode Certificate Code
   * @return OK
   */
  downloadCertificateResponse(certificateCode: string): __Observable<__StrictHttpResponse<EeAttendeeCertificate>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/certificates/download/${certificateCode}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeAttendeeCertificate>;
      })
    );
  }
  /**
   * @param certificateCode Certificate Code
   * @return OK
   */
  downloadCertificate(certificateCode: string): __Observable<EeAttendeeCertificate> {
    return this.downloadCertificateResponse(certificateCode).pipe(
      __map(_r => _r.body as EeAttendeeCertificate)
    );
  }

  /**
   * @param params The `EeEventCertificatesService.ListCertificateTemplatesParams` containing the following parameters:
   *
   * - `limit`: Number of items returned
   *
   * - `cursor`: Start Cursor for query
   *
   * @return Certificate templates
   */
  listCertificateTemplatesResponse(params: EeEventCertificatesService.ListCertificateTemplatesParams): __Observable<__StrictHttpResponse<EePagedEventCertificateTemplate>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.cursor != null) __params = __params.set('cursor', params.cursor.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/certificate-templates`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EePagedEventCertificateTemplate>;
      })
    );
  }
  /**
   * @param params The `EeEventCertificatesService.ListCertificateTemplatesParams` containing the following parameters:
   *
   * - `limit`: Number of items returned
   *
   * - `cursor`: Start Cursor for query
   *
   * @return Certificate templates
   */
  listCertificateTemplates(params: EeEventCertificatesService.ListCertificateTemplatesParams): __Observable<EePagedEventCertificateTemplate> {
    return this.listCertificateTemplatesResponse(params).pipe(
      __map(_r => _r.body as EePagedEventCertificateTemplate)
    );
  }

  /**
   * @param params The `EeEventCertificatesService.RetrieveUserCertificateParams` containing the following parameters:
   *
   * - `certificateId`: Certificate Id
   *
   * - `attendeeId`: Attendee Id
   *
   * - `getAnnotation`:
   *
   * @return OK
   */
  retrieveUserCertificateResponse(params: EeEventCertificatesService.RetrieveUserCertificateParams): __Observable<__StrictHttpResponse<EeUserCertificate>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.getAnnotation != null) __params = __params.set('getAnnotation', params.getAnnotation.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/certificates/${params.certificateId}/attendees/${params.attendeeId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeUserCertificate>;
      })
    );
  }
  /**
   * @param params The `EeEventCertificatesService.RetrieveUserCertificateParams` containing the following parameters:
   *
   * - `certificateId`: Certificate Id
   *
   * - `attendeeId`: Attendee Id
   *
   * - `getAnnotation`:
   *
   * @return OK
   */
  retrieveUserCertificate(params: EeEventCertificatesService.RetrieveUserCertificateParams): __Observable<EeUserCertificate> {
    return this.retrieveUserCertificateResponse(params).pipe(
      __map(_r => _r.body as EeUserCertificate)
    );
  }

  /**
   * @param params The `EeEventCertificatesService.UpdateUserCertificateParams` containing the following parameters:
   *
   * - `certificateId`: Certificate Id
   *
   * - `body`: Certificate data
   *
   * - `attendeeId`: Attendee Id
   *
   * @return User Certificate updated
   */
  updateUserCertificateResponse(params: EeEventCertificatesService.UpdateUserCertificateParams): __Observable<__StrictHttpResponse<EeUserCertificate>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/certificates/${params.certificateId}/attendees/${params.attendeeId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeUserCertificate>;
      })
    );
  }
  /**
   * @param params The `EeEventCertificatesService.UpdateUserCertificateParams` containing the following parameters:
   *
   * - `certificateId`: Certificate Id
   *
   * - `body`: Certificate data
   *
   * - `attendeeId`: Attendee Id
   *
   * @return User Certificate updated
   */
  updateUserCertificate(params: EeEventCertificatesService.UpdateUserCertificateParams): __Observable<EeUserCertificate> {
    return this.updateUserCertificateResponse(params).pipe(
      __map(_r => _r.body as EeUserCertificate)
    );
  }

  /**
   * @param templateUrl undefined
   * @return OK
   */
  inspectTemplateResponse(templateUrl: string): __Observable<__StrictHttpResponse<EeCertificateInspect>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (templateUrl != null) __params = __params.set('templateUrl', templateUrl.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/certificates/inspectTemplate`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeCertificateInspect>;
      })
    );
  }
  /**
   * @param templateUrl undefined
   * @return OK
   */
  inspectTemplate(templateUrl: string): __Observable<EeCertificateInspect> {
    return this.inspectTemplateResponse(templateUrl).pipe(
      __map(_r => _r.body as EeCertificateInspect)
    );
  }
}

module EeEventCertificatesService {

  /**
   * Parameters for listCertificatesByProfile
   */
  export interface ListCertificatesByProfileParams {

    /**
     * Profile Id
     */
    profileId: string;
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
   * Parameters for listCertificates
   */
  export interface ListCertificatesParams {

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
   * Parameters for createCertificate
   */
  export interface CreateCertificateParams {

    /**
     * Event Id
     */
    eventId: string;

    /**
     * Certificate object to be created
     */
    body: EeEventCertificateUpdate;
  }

  /**
   * Parameters for updateCertificate
   */
  export interface UpdateCertificateParams {

    /**
     * Certificate Id
     */
    certificateId: string;

    /**
     * Certificate to update
     */
    body: EeEventCertificateUpdate;
  }

  /**
   * Parameters for previewCertificate
   */
  export interface PreviewCertificateParams {

    /**
     * Certificate Id
     */
    certificateId: string;

    /**
     * Data to preview certificate
     */
    body: {};
  }

  /**
   * Parameters for upsertAssignmentRule
   */
  export interface UpsertAssignmentRuleParams {

    /**
     * Certificate Id
     */
    certificateId: string;

    /**
     * Rules for certificate assignment
     */
    body: Array<EeCertificateRuleInput>;
  }

  /**
   * Parameters for createAttendeeCertificate
   */
  export interface CreateAttendeeCertificateParams {

    /**
     * Certificate Id
     */
    certificateId: string;
    attendeeIds?: Array<string>;
  }

  /**
   * Parameters for deleteAttendeeCertificate
   */
  export interface DeleteAttendeeCertificateParams {

    /**
     * Certificate Id
     */
    certificateId: string;
    attendeeIds?: Array<string>;
  }

  /**
   * Parameters for listCertificateTemplates
   */
  export interface ListCertificateTemplatesParams {

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
   * Parameters for retrieveUserCertificate
   */
  export interface RetrieveUserCertificateParams {

    /**
     * Certificate Id
     */
    certificateId: string;

    /**
     * Attendee Id
     */
    attendeeId: string;
    getAnnotation?: boolean;
  }

  /**
   * Parameters for updateUserCertificate
   */
  export interface UpdateUserCertificateParams {

    /**
     * Certificate Id
     */
    certificateId: string;

    /**
     * Certificate data
     */
    body: EeUserCertificateUpdate;

    /**
     * Attendee Id
     */
    attendeeId: string;
  }
}

export { EeEventCertificatesService }
