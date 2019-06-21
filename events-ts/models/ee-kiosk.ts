/* tslint:disable */
import { EeBaseId } from './ee-base-id';
import { EeEventDropin } from './ee-event-dropin';
export interface EeKiosk extends EeBaseId {
  name?: string;
  description?: string;
  color?: string;
  removeDropin?: boolean;
  isLocked?: boolean;
  screenBrightness?: number;
  linkedAccountId?: string;
  isDropinConnected?: boolean;
  dropin?: EeEventDropin;
  deactivatedWhen?: number;
}
