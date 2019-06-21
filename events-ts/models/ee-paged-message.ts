/* tslint:disable */
import { EeDSPagination } from './ee-dspagination';
import { EeMessage } from './ee-message';
export interface EePagedMessage {
  pageData?: EeDSPagination;
  items?: Array<EeMessage>;
}
