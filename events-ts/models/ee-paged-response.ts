/* tslint:disable */
import { EeDSPagination } from './ee-dspagination';
import { EeSurveyResponseItem } from './ee-survey-response-item';
export interface EePagedResponse {
  pageData?: EeDSPagination;
  items?: Array<EeSurveyResponseItem>;
}
