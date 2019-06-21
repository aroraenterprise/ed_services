/* tslint:disable */
import { EeDSPagination } from './ee-dspagination';
import { EeEventAutomation } from './ee-event-automation';
export interface EePagedEventAutomation {
  pageData?: EeDSPagination;
  items?: Array<EeEventAutomation>;
}
