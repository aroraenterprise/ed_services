/* tslint:disable */
import { EePagination } from './ee-pagination';
import { EeEventCertificate } from './ee-event-certificate';
export interface EePagedEventCertificate {
  pageData?: EePagination;
  items?: Array<EeEventCertificate>;
}
