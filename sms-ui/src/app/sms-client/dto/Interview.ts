import { InterviewClient } from './InterviewClient';
import { InterviewFeedback } from './InterviewFeedback';
import { AssociateFeedback } from './AssociateFeedback';

export interface Interview {
    id: number;
    managerEmail: string;
    associateEmail: string;
    scheduled: number;
    notified: number;
    reviewed: number;
    place: string;
    feedback: InterviewFeedback;
    associateInput: AssociateFeedback;
    client: InterviewClient;
}
