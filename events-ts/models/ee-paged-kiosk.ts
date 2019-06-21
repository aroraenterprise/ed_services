/* tslint:disable */
import { EePagination } from './ee-pagination';
import { EeKiosk } from './ee-kiosk';
export interface EePagedKiosk {
  pageData?: EePagination;
  items?: Array<EeKiosk>;
}
