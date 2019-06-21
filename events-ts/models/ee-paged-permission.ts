/* tslint:disable */
import { EeDSPagination } from './ee-dspagination';
import { EePermission } from './ee-permission';
export interface EePagedPermission {
  pageData?: EeDSPagination;
  allPermission?: Array<string>;
  items?: Array<EePermission>;
}
