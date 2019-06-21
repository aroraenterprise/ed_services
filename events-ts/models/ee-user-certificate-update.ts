/* tslint:disable */
import { EeBaseId } from './ee-base-id';
import { EePaceCredit } from './ee-pace-credit';
export interface EeUserCertificateUpdate extends EeBaseId {
  isPace?: boolean;
  pace?: EePaceCredit;
  isCerp?: boolean;
}
