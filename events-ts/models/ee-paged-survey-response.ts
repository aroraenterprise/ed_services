/* tslint:disable */
import { EeDSPagination } from './ee-dspagination';
import { EeSurveyResponse } from './ee-survey-response';
export interface EePagedSurveyResponse {
  pageData?: EeDSPagination;
  items?: Array<EeSurveyResponse>;
}
