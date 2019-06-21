/* tslint:disable */
import { EePaceCredit } from './ee-pace-credit';
import { EeCredit } from './ee-credit';
export interface EeEventCertificateUpdate {
  name: string;
  templateUrl?: string;
  annotation?: {};
  certVersion?: number;
  isPace?: boolean;
  pace?: EePaceCredit;
  isCerp?: boolean;
  credits?: Array<EeCredit>;
}
