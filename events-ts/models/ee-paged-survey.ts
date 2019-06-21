/* tslint:disable */
import { EeDSPagination } from './ee-dspagination';
import { EeSurvey } from './ee-survey';
export interface EePagedSurvey {
  pageData?: EeDSPagination;
  items?: Array<EeSurvey>;
}
