/* tslint:disable */
import { EeBaseId } from './ee-base-id';
import { EeUser } from './ee-user';
import { EeMembership } from './ee-membership';
import { EeAttendeeDropin } from './ee-attendee-dropin';
import { EeAttendeeCertificate } from './ee-attendee-certificate';
import { EeAttendeeSurveyResponse } from './ee-attendee-survey-response';
export interface EeEventAttendee extends EeBaseId {
  timestamp?: number;
  ownerId?: string;
  isAnonymous?: boolean;
  organizerId?: string;
  organizerName?: string;
  organizerUsername?: string;
  organizerPicture?: string;
  eventId?: string;
  eventPicture?: string;
  eventName?: string;
  ticketId?: string;
  ticketName?: string;
  orderItemId?: string;
  itemId?: string;
  orderId?: string;
  user?: EeUser;
  link?: string;
  memberships?: Array<EeMembership>;
  dropins?: Array<EeAttendeeDropin>;
  dropinCount?: number;
  hasDropins?: boolean;
  certificates?: Array<EeAttendeeCertificate>;
  certificateCount?: number;
  hasCertificates?: boolean;
  surveyResponses?: Array<EeAttendeeSurveyResponse>;
}
