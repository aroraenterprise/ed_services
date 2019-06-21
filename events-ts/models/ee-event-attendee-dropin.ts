/* tslint:disable */
import { EeEventAttendee } from './ee-event-attendee';
import { EeSurveyResponseItem } from './ee-survey-response-item';
export interface EeEventAttendeeDropin {
  items?: Array<EeEventAttendee>;
  newDropins?: Array<string>;
  surveyResponses?: Array<EeSurveyResponseItem>;
}
