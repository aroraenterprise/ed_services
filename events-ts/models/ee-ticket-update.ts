/* tslint:disable */
import { EeSurveyQuestion } from './ee-survey-question';
export interface EeTicketUpdate {
  moduleId?: string;
  surveyQuestions?: {[key: string]: EeSurveyQuestion};
}
