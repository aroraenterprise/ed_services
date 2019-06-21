/* tslint:disable */
export interface EeEventAutomationUpdate {
  triggerType: 'dropin' | 'certificate';
  triggerCondition?: string;
  attendeeStateCondition?: string;
  actionType: 'assignCertificate';
  actionData?: {};
  dropletId?: string;
  dropletData?: {};
  active?: boolean;
}
