import { User } from './User';
import { Address } from 'cluster';

export interface Cohort {
    cohortId: number;
    CName: string;
    address: Address;
    Token: string;
    StartD: string;
    EndD: string;
    trainer: User;
    coTrainer: User;
    Email: string;
}