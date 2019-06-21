/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { EeMessage } from '../models/ee-message';
import { EeDefaultError } from '../models/ee-default-error';
import { EeMessageInput } from '../models/ee-message-input';
import { EePagedMessage } from '../models/ee-paged-message';

/**
 * Manage, send and track event messages
 */
@Injectable({
  providedIn: 'root',
})
class EeMessagesService extends __BaseService {
  static readonly createMessagePath = '/events/{eventId}/messages';
  static readonly listMessagesPath = '/events/{eventId}/messages';
  static readonly removeMessagePath = '/messages/{messageId}';
  static readonly retrieveMessagePath = '/messages/{messageId}';
  static readonly updateMessagePath = '/messages/{messageId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `EeMessagesService.CreateMessageParams` containing the following parameters:
   *
   * - `eventId`: Event Id
   *
   * - `body`:
   *
   * @return Message
   */
  createMessageResponse(params: EeMessagesService.CreateMessageParams): __Observable<__StrictHttpResponse<EeMessage>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/events/${params.eventId}/messages`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeMessage>;
      })
    );
  }
  /**
   * @param params The `EeMessagesService.CreateMessageParams` containing the following parameters:
   *
   * - `eventId`: Event Id
   *
   * - `body`:
   *
   * @return Message
   */
  createMessage(params: EeMessagesService.CreateMessageParams): __Observable<EeMessage> {
    return this.createMessageResponse(params).pipe(
      __map(_r => _r.body as EeMessage)
    );
  }

  /**
   * @param params The `EeMessagesService.ListMessagesParams` containing the following parameters:
   *
   * - `eventId`: Event Id
   *
   * - `limit`: Number of items returned
   *
   * - `isReminder`:
   *
   * - `cursor`: Start Cursor for query
   *
   * @return Paged messages
   */
  listMessagesResponse(params: EeMessagesService.ListMessagesParams): __Observable<__StrictHttpResponse<EePagedMessage>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.isReminder != null) __params = __params.set('isReminder', params.isReminder.toString());
    if (params.cursor != null) __params = __params.set('cursor', params.cursor.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/events/${params.eventId}/messages`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EePagedMessage>;
      })
    );
  }
  /**
   * @param params The `EeMessagesService.ListMessagesParams` containing the following parameters:
   *
   * - `eventId`: Event Id
   *
   * - `limit`: Number of items returned
   *
   * - `isReminder`:
   *
   * - `cursor`: Start Cursor for query
   *
   * @return Paged messages
   */
  listMessages(params: EeMessagesService.ListMessagesParams): __Observable<EePagedMessage> {
    return this.listMessagesResponse(params).pipe(
      __map(_r => _r.body as EePagedMessage)
    );
  }

  /**
   * @param messageId Message Id
   * @return Message
   */
  removeMessageResponse(messageId: string): __Observable<__StrictHttpResponse<EeMessage>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/messages/${messageId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeMessage>;
      })
    );
  }
  /**
   * @param messageId Message Id
   * @return Message
   */
  removeMessage(messageId: string): __Observable<EeMessage> {
    return this.removeMessageResponse(messageId).pipe(
      __map(_r => _r.body as EeMessage)
    );
  }

  /**
   * @param messageId Message Id
   * @return Message
   */
  retrieveMessageResponse(messageId: string): __Observable<__StrictHttpResponse<EeMessage>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/messages/${messageId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeMessage>;
      })
    );
  }
  /**
   * @param messageId Message Id
   * @return Message
   */
  retrieveMessage(messageId: string): __Observable<EeMessage> {
    return this.retrieveMessageResponse(messageId).pipe(
      __map(_r => _r.body as EeMessage)
    );
  }

  /**
   * @param params The `EeMessagesService.UpdateMessageParams` containing the following parameters:
   *
   * - `messageId`: Message Id
   *
   * - `body`:
   *
   * @return Message
   */
  updateMessageResponse(params: EeMessagesService.UpdateMessageParams): __Observable<__StrictHttpResponse<EeMessage>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/messages/${params.messageId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EeMessage>;
      })
    );
  }
  /**
   * @param params The `EeMessagesService.UpdateMessageParams` containing the following parameters:
   *
   * - `messageId`: Message Id
   *
   * - `body`:
   *
   * @return Message
   */
  updateMessage(params: EeMessagesService.UpdateMessageParams): __Observable<EeMessage> {
    return this.updateMessageResponse(params).pipe(
      __map(_r => _r.body as EeMessage)
    );
  }
}

module EeMessagesService {

  /**
   * Parameters for createMessage
   */
  export interface CreateMessageParams {

    /**
     * Event Id
     */
    eventId: string;
    body?: EeMessageInput;
  }

  /**
   * Parameters for listMessages
   */
  export interface ListMessagesParams {

    /**
     * Event Id
     */
    eventId: string;

    /**
     * Number of items returned
     */
    limit?: number;
    isReminder?: boolean;

    /**
     * Start Cursor for query
     */
    cursor?: string;
  }

  /**
   * Parameters for updateMessage
   */
  export interface UpdateMessageParams {

    /**
     * Message Id
     */
    messageId: string;
    body?: EeMessageInput;
  }
}

export { EeMessagesService }
