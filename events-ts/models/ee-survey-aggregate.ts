/* tslint:disable */
import { EeBaseId } from './ee-base-id';
import { EeAggregate } from './ee-aggregate';
export interface EeSurveyAggregate extends EeBaseId {
  eventId?: string;
  organizerId?: string;
  isDirty?: boolean;
  lastTalliedWhen?: number;
  aggregates?: {[key: string]: EeAggregate};
}
