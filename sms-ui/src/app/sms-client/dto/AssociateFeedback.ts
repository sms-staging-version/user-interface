import { InterviewFormat } from './InterviewFormat';

export interface AssociateFeedback {
    id: number;
    receivedNotifications: number;
    descriptionProvided: boolean;
    interviewFormat: InterviewFormat;
    proposedFormat: InterviewFormat;
}
