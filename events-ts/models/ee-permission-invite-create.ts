/* tslint:disable */
export interface EePermissionInviteCreate {
  invitedByName?: string;
  emails: Array<string>;
  permissions: Array<string>;
  message?: string;
}
