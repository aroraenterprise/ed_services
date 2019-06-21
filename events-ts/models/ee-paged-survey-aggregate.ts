/* tslint:disable */
import { EeDSPagination } from './ee-dspagination';
import { EeSurveyAggregate } from './ee-survey-aggregate';
export interface EePagedSurveyAggregate {
  pageData?: EeDSPagination;
  items?: Array<EeSurveyAggregate>;
}
