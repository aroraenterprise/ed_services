/* tslint:disable */
import { EeDSPagination } from './ee-dspagination';
import { EePACEProvider } from './ee-paceprovider';
export interface EePagedPACEProvider {
  pageData?: EeDSPagination;
  items?: Array<EePACEProvider>;
}
