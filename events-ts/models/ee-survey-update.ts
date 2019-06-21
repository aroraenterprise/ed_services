/* tslint:disable */
import { EeSurveyQuestion } from './ee-survey-question';
export interface EeSurveyUpdate {
  itemType?: string;
  itemId?: string;
  name: string;
  questions?: Array<EeSurveyQuestion>;
}
