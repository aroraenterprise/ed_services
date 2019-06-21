/* tslint:disable */
import { EeGeoloc } from './ee-geoloc';
export interface EeAddress {
  formatted?: string;
  landmark?: string;
  street?: string;
  city?: string;
  state?: string;
  country?: string;
  zip?: string;
  geoloc?: EeGeoloc;
  placeId?: string;
}
