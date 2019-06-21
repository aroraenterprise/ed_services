/* tslint:disable */
import { EeUser } from './ee-user';
import { EeMembership } from './ee-membership';
export interface EeEventAttendeeUpdate {
  sendClaim?: boolean;
  user?: EeUser;
  memberships?: Array<EeMembership>;
}
