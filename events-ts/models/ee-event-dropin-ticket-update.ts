/* tslint:disable */
import { EeEventDropinTicketField } from './ee-event-dropin-ticket-field';
export interface EeEventDropinTicketUpdate {
  id?: string;
  showSurvey?: boolean;
  surveyFields?: Array<string>;
  fields?: Array<EeEventDropinTicketField>;
}
