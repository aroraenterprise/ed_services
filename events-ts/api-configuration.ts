/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration for Api services
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = 'https://events-dot-edropin-amalgam.appspot.com';
}

export interface ApiConfigurationInterface {
  rootUrl?: string;
}
