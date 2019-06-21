/* tslint:disable */
import { EeFAQ } from './ee-faq';
import { EeImage } from './ee-image';
import { EeAddress } from './ee-address';
import { EeEventModule } from './ee-event-module';
export interface EeEventUpdate {
  organizerId?: string;
  name?: string;
  slug?: string;
  startTimestamp?: number;
  endTimestamp?: number;
  timezone?: string;
  bio?: string;
  description?: string;
  faqs?: Array<EeFAQ>;
  eventOutline?: Array<string>;
  picture?: string;
  featuredImages?: Array<EeImage>;
  website?: string;
  isPace?: boolean;
  paceRegion?: 'Nationally' | 'Locally';
  isOnline?: boolean;
  onlineOnly?: boolean;
  isHandsOn?: boolean;
  isSeminar?: boolean;
  isSocial?: boolean;
  isDestination?: boolean;
  destinationFlags?: Array<string>;
  isModular?: boolean;
  isLive?: boolean;
  isPublic?: boolean;
  categories?: Array<string>;
  address?: EeAddress;
  policy?: string;
  modules?: Array<EeEventModule>;
  agreeTerms?: 'v1';
}
