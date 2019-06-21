/* tslint:disable */
import { EeEventDropinTicketUpdate } from './ee-event-dropin-ticket-update';
export interface EeEventDropinUpdate {
  name: string;
  color?: string;
  dropinType?: 'CheckIn' | 'CheckOut' | 'Other';
  startTimestamp?: number;
  endTimestamp?: number;
  isNotificationEnabled?: boolean;
  status: 'Auto' | 'Open' | 'Closed';
  customMessage?: string;
  tickets?: Array<EeEventDropinTicketUpdate>;
}
