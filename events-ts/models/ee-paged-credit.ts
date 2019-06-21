/* tslint:disable */
import { EeDSPagination } from './ee-dspagination';
import { EeCredit } from './ee-credit';
export interface EePagedCredit {
  pageData?: EeDSPagination;
  items?: Array<EeCredit>;
}
