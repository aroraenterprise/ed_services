/* tslint:disable */
import { EeAddress } from './ee-address';
export interface EeEventModule {
  id?: string;
  name: string;
  description?: string;
  startTimestamp: number;
  endTimestamp: number;
  timezone: string;
  address?: EeAddress;
  ticketIds?: Array<string>;
  isRequired?: boolean;
  isDeleted?: boolean;
}
