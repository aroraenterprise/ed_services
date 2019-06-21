/* tslint:disable */
export interface EePermissionInvite {
  id?: string;
  modifiedOn?: string;
  creatorId?: string;
  entityType?: string;
  entityId?: string;
  permissions?: {};
  email?: string;
  message?: string;
  acceptedWhen?: number;
  declinedWhen?: number;
  acceptedById?: string;
  acceptedByName?: string;
}
