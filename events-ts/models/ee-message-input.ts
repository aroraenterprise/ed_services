/* tslint:disable */
export interface EeMessageInput {
  subject: string;
  body: string;
  sendAt?: number;
  sendEmailNow?: boolean;
  emailAllAttendees?: boolean;
  reminderId?: string;
}
