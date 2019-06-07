import { Address } from './Address';
import { status } from './Status';

export interface User {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  trainingAddress: Address;
  personalAddress: Address;
  userStatus: status;
}
