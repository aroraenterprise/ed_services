/* tslint:disable */
import { EePagination } from './ee-pagination';
import { EeEvent } from './ee-event';
export interface EePagedEvent {
  pageData?: EePagination;
  items?: Array<EeEvent>;
}
