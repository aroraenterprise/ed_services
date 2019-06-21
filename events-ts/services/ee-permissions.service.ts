/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { EePermissionAccept } from '../models/ee-permission-accept';
import { EeDefaultError } from '../models/ee-default-error';
import { EePagedPermissionInvite } from '../models/ee-paged-permission-invite';
import { EePermissionInviteCreate } from '../models/ee-permission-invite-create';
import { EePagedPermission } from '../models/ee-paged-permission';
import { EePermissionCheck } from '../models/ee-permission-check';
import { EePermission } from '../models/ee-permission';
import { EePermissionInput } from '../models/ee-permission-input';
import { EeSuccess } from '../models/ee-success';

/**
 * Permissions
 */
@Injectable({
  providedIn: 'root',
})
class EePermissionsService extends __BaseService {
  static readonly acceptPermissionInvitePath = '/permissions/accept-invite/{inviteToken}';
  static readonly sendPermissionInvitePath = '/permissions/{entityType}/{entityId}/send-invite';
  static readonly paginatePermissionsPath = '/permissions/{entityType}/{entityId}/accounts';
  static readonly hasPermissionPath = '/permissions/{entityType}/{entityId}/accounts/{accountId}';
  static readonly setPermissionPath = '/permissions/{entityType}/{entityId}/accounts/{accountId}';
  static readonly removePermissionsForAccountPath = '/permissions/{entityType}/{entityId}/accounts/{accountId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `EePermissionsService.AcceptPermissionInviteParams` containing the following parameters:
   *
   * - `inviteToken`: Invite Token
   *
   * - `v`: Accept or decline an invite
   *
   * @return OK
   */
  acceptPermissionInviteResponse(params: EePermissionsService.AcceptPermissionInviteParams): __Observable<__StrictHttpResponse<EePermissionAccept>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.v != null) __params = __params.set('v', params.v.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/permissions/accept-invite/${params.inviteToken}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EePermissionAccept>;
      })
    );
  }
  /**
   * @param params The `EePermissionsService.AcceptPermissionInviteParams` containing the following parameters:
   *
   * - `inviteToken`: Invite Token
   *
   * - `v`: Accept or decline an invite
   *
   * @return OK
   */
  acceptPermissionInvite(params: EePermissionsService.AcceptPermissionInviteParams): __Observable<EePermissionAccept> {
    return this.acceptPermissionInviteResponse(params).pipe(
      __map(_r => _r.body as EePermissionAccept)
    );
  }

  /**
   * @param params The `EePermissionsService.SendPermissionInviteParams` containing the following parameters:
   *
   * - `permissionInvite`: Object for permission invite
   *
   * - `entityType`: Entity Type
   *
   * - `entityId`: Entity Id
   *
   * @return OK
   */
  sendPermissionInviteResponse(params: EePermissionsService.SendPermissionInviteParams): __Observable<__StrictHttpResponse<EePagedPermissionInvite>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.permissionInvite;


    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/permissions/${params.entityType}/${params.entityId}/send-invite`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EePagedPermissionInvite>;
      })
    );
  }
  /**
   * @param params The `EePermissionsService.SendPermissionInviteParams` containing the following parameters:
   *
   * - `permissionInvite`: Object for permission invite
   *
   * - `entityType`: Entity Type
   *
   * - `entityId`: Entity Id
   *
   * @return OK
   */
  sendPermissionInvite(params: EePermissionsService.SendPermissionInviteParams): __Observable<EePagedPermissionInvite> {
    return this.sendPermissionInviteResponse(params).pipe(
      __map(_r => _r.body as EePagedPermissionInvite)
    );
  }

  /**
   * @param params The `EePermissionsService.PaginatePermissionsParams` containing the following parameters:
   *
   * - `entityType`: Entity Type
   *
   * - `entityId`: Entity Id
   *
   * - `limit`: Number of items returned
   *
   * - `cursor`: Start Cursor for query
   *
   * @return Permissions for account
   */
  paginatePermissionsResponse(params: EePermissionsService.PaginatePermissionsParams): __Observable<__StrictHttpResponse<EePagedPermission>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.cursor != null) __params = __params.set('cursor', params.cursor.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/permissions/${params.entityType}/${params.entityId}/accounts`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EePagedPermission>;
      })
    );
  }
  /**
   * @param params The `EePermissionsService.PaginatePermissionsParams` containing the following parameters:
   *
   * - `entityType`: Entity Type
   *
   * - `entityId`: Entity Id
   *
   * - `limit`: Number of items returned
   *
   * - `cursor`: Start Cursor for query
   *
   * @return Permissions for account
   */
  paginatePermissions(params: EePermissionsService.PaginatePermissionsParams): __Observable<EePagedPermission> {
    return this.paginatePermissionsResponse(params).pipe(
      __map(_r => _r.body as EePagedPermission)
    );
  }

  /**
   * @param params The `EePermissionsService.HasPermissionParams` containing the following parameters:
   *
   * - `entityType`: Entity Type
   *
   * - `entityId`: Entity Id
   *
   * - `accountId`: Account Id
   *
   * - `permission`:
   *
   * @return Account has Permission
   */
  hasPermissionResponse(params: EePermissionsService.HasPermissionParams): __Observable<__StrictHttpResponse<EePermissionCheck>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    if (params.permission != null) __params = __params.set('permission', params.permission.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/permissions/${params.entityType}/${params.entityId}/accounts/${params.accountId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EePermissionCheck>;
      })
    );
  }
  /**
   * @param params The `EePermissionsService.HasPermissionParams` containing the following parameters:
   *
   * - `entityType`: Entity Type
   *
   * - `entityId`: Entity Id
   *
   * - `accountId`: Account Id
   *
   * - `permission`:
   *
   * @return Account has Permission
   */
  hasPermission(params: EePermissionsService.HasPermissionParams): __Observable<EePermissionCheck> {
    return this.hasPermissionResponse(params).pipe(
      __map(_r => _r.body as EePermissionCheck)
    );
  }

  /**
   * @param params The `EePermissionsService.SetPermissionParams` containing the following parameters:
   *
   * - `permissionProps`:
   *
   * - `entityType`: Entity Type
   *
   * - `entityId`: Entity Id
   *
   * - `accountId`: Account Id
   *
   * @return Set Account Permission
   */
  setPermissionResponse(params: EePermissionsService.SetPermissionParams): __Observable<__StrictHttpResponse<EePermission>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.permissionProps;



    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/permissions/${params.entityType}/${params.entityId}/accounts/${params.accountId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EePermission>;
      })
    );
  }
  /**
   * @param params The `EePermissionsService.SetPermissionParams` containing the following parameters:
   *
   * - `permissionProps`:
   *
   * - `entityType`: Entity Type
   *
   * - `entityId`: Entity Id
   *
   * - `accountId`: Account Id
   *
   * @return Set Account Permission
   */
  setPermission(params: EePermissionsService.SetPermissionParams): __Observable<EePermission> {
    return this.setPermissionResponse(params).pipe(
      __map(_r => _r.body as EePermission)
    );
  }

  /**
   * @param params The `EePermissionsService.RemovePermissionsForAccountParams` containing the following parameters:
   *
   * - `entityType`: Entity Type
   *
   * - `entityId`: Entity Id
   *
   * - `accountId`: Account Id
   *
   * @return Permissions for account
   */
  removePermissionsForAccountResponse(params: EePermissionsService.RemovePermissionsForAccountParams): __Observable<__StrictHttpResponse<EeSuccess>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/permissions/${params.entityType}/${params.entityId}/accounts/${params.accountId}`,
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
   * @param params The `EePermissionsService.RemovePermissionsForAccountParams` containing the following parameters:
   *
   * - `entityType`: Entity Type
   *
   * - `entityId`: Entity Id
   *
   * - `accountId`: Account Id
   *
   * @return Permissions for account
   */
  removePermissionsForAccount(params: EePermissionsService.RemovePermissionsForAccountParams): __Observable<EeSuccess> {
    return this.removePermissionsForAccountResponse(params).pipe(
      __map(_r => _r.body as EeSuccess)
    );
  }
}

module EePermissionsService {

  /**
   * Parameters for acceptPermissionInvite
   */
  export interface AcceptPermissionInviteParams {

    /**
     * Invite Token
     */
    inviteToken: string;

    /**
     * Accept or decline an invite
     */
    v?: 'accept' | 'decline';
  }

  /**
   * Parameters for sendPermissionInvite
   */
  export interface SendPermissionInviteParams {

    /**
     * Object for permission invite
     */
    permissionInvite: EePermissionInviteCreate;

    /**
     * Entity Type
     */
    entityType: string;

    /**
     * Entity Id
     */
    entityId: string;
  }

  /**
   * Parameters for paginatePermissions
   */
  export interface PaginatePermissionsParams {

    /**
     * Entity Type
     */
    entityType: string;

    /**
     * Entity Id
     */
    entityId: string;

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
   * Parameters for hasPermission
   */
  export interface HasPermissionParams {

    /**
     * Entity Type
     */
    entityType: string;

    /**
     * Entity Id
     */
    entityId: string;

    /**
     * Account Id
     */
    accountId: string;
    permission?: string;
  }

  /**
   * Parameters for setPermission
   */
  export interface SetPermissionParams {
    permissionProps: EePermissionInput;

    /**
     * Entity Type
     */
    entityType: string;

    /**
     * Entity Id
     */
    entityId: string;

    /**
     * Account Id
     */
    accountId: string;
  }

  /**
   * Parameters for removePermissionsForAccount
   */
  export interface RemovePermissionsForAccountParams {

    /**
     * Entity Type
     */
    entityType: string;

    /**
     * Entity Id
     */
    entityId: string;

    /**
     * Account Id
     */
    accountId: string;
  }
}

export { EePermissionsService }
