/* tslint:disable */
import { EeSurveyResponseItem } from './ee-survey-response-item';
import { EeEventAttendee } from './ee-event-attendee';
export interface EeSurveyResponse {
  items?: Array<EeSurveyResponseItem>;
  attendees?: Array<EeEventAttendee>;
}
