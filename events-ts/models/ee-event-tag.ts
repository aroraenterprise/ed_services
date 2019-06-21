/* tslint:disable */
export interface EeEventTag {
  id?: string;
  roles?: Array<string>;
  profileId?: string;
  taggedById?: string;
  taggedByName?: string;
  eventId?: string;
  isInvited?: boolean;
  referralCode?: string;
  acceptedWhen?: number;
  declinedWhen?: number;
}
