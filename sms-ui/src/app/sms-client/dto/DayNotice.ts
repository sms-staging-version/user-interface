import { AssociateInput } from './AssociateInput';
import { Feedback } from './Feedback';

export interface DayNotice {
    id: number;
    associateEmail: string;
    place: string; 
   associateInput: AssociateInput;
   feedback: Feedback;
}






