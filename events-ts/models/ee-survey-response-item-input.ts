/* tslint:disable */
import { EeQuestionAnswer } from './ee-question-answer';
export interface EeSurveyResponseItemInput {
  statusId?: string;
  orderItemId?: string;
  answers?: {[key: string]: EeQuestionAnswer};
}
