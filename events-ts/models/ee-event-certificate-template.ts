/* tslint:disable */
import { EeBaseId } from './ee-base-id';
export interface EeEventCertificateTemplate extends EeBaseId {
  name?: string;
  templateUrl?: string;
  annotation?: {};
  thumbnail?: string;
  isPace?: boolean;
  isCerp?: boolean;
}
