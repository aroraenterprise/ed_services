/* tslint:disable */
import { EeDSPagination } from './ee-dspagination';
import { EeEventCertificateTemplate } from './ee-event-certificate-template';
export interface EePagedEventCertificateTemplate {
  pageData?: EeDSPagination;
  items?: Array<EeEventCertificateTemplate>;
}
