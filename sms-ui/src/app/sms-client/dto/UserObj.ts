import { AddressObject } from './AddressObj';
import { status } from './Status';

export class UserObj {
    userId: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    trainingAddress: AddressObject;
    personalAddress: AddressObject;
    userStatus: status;

    constructor(userId: number, firstName: string, lastName: string,
        email: string, phoneNumber: string, trainingAddress: AddressObject, 
        personalAddress: AddressObject, userStatus: status ){
            this.userId = userId; 
            this.firstName = firstName; 
            this.lastName = lastName; 
            this.email = email; 
            this.phoneNumber = phoneNumber; 
            this.trainingAddress = trainingAddress; 
            this.personalAddress = personalAddress; 
            this.userStatus = userStatus; 
    }

  }
  