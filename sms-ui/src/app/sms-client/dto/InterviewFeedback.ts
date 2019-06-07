import { InterviewStatus } from './InterviewStatus';

export interface InterviewFeedback {
    id: number;
    feedbackRequested: number;
    feedback: string;
    feedbackReceived: number;
    feedbackDelivered: number;
    status: InterviewStatus;
}
