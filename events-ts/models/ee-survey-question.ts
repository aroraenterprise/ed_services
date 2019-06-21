/* tslint:disable */
import { EeSurveyQuestionWhen } from './ee-survey-question-when';
export interface EeSurveyQuestion {
  id?: string;
  questionType?: string;
  prompt?: string;
  label?: string;
  choices?: Array<string>;
  notIncluded?: boolean;
  when?: EeSurveyQuestionWhen;
  metadata?: string;
  order?: number;
  defaultValue?: string;
  validators?: Array<'email' | 'required'>;
}
