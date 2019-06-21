/* tslint:disable */
import { EeDSPagination } from './ee-dspagination';
import { EePermissionInvite } from './ee-permission-invite';
export interface EePagedPermissionInvite {
  pageData?: EeDSPagination;
  allPermission?: Array<string>;
  items?: Array<EePermissionInvite>;
}
