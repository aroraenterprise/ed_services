/* tslint:disable */
import { EePermissionInvite } from './ee-permission-invite';
import { EePermission } from './ee-permission';
export interface EePermissionAccept {
  invite?: EePermissionInvite;
  permission?: EePermission;
}
