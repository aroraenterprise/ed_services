/* tslint:disable */
import { EePagination } from './ee-pagination';
import { EeEventTag } from './ee-event-tag';
import { EeProfile } from './ee-profile';
export interface EePagedEventTag {
  pageData?: EePagination;
  items?: Array<EeEventTag>;
  profiles?: Array<EeProfile>;
}
