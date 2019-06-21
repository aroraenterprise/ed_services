/* tslint:disable */
import { EeAggregateValue } from './ee-aggregate-value';
export interface EeAggregate {
  label?: string;
  values?: {[key: string]: EeAggregateValue};
}
