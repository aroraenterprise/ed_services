/* tslint:disable */
import { EeDeleteIds } from './ee-delete-ids';
export interface EeDeleteResponse {
  success?: boolean;
  deletedItems?: {[key: string]: EeDeleteIds};
}
