/* tslint:disable */
import { EePagination } from './ee-pagination';
import { EeEventDropin } from './ee-event-dropin';
export interface EePagedEventDropin {
  pageData?: EePagination;
  items?: Array<EeEventDropin>;
}
