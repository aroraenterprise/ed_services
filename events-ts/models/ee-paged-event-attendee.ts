/* tslint:disable */
import { EePagination } from './ee-pagination';
import { EeEventAttendee } from './ee-event-attendee';
export interface EePagedEventAttendee {
  pageData?: EePagination;
  items?: Array<EeEventAttendee>;
}
