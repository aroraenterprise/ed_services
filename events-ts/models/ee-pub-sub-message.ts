/* tslint:disable */
export interface EePubSubMessage {
  subscription?: string;
  message?: {data?: string, attributes?: {}, message_id?: string};
}
