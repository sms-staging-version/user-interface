export class AddressObject {
    
    addressId: number;
    alias: string;
    street: string;
    zip: string;
    city: string;
    state: string;
    country: string;
    isTrainingLocation: boolean;

    constructor(addressId: number,alias: string,
        street: string, zip: string,city: string, 
        state: string, country: string, isTrainingLocation: boolean) {
        this.addressId = addressId;
        this.alias = alias;
        this.street = street; 
        this.zip = zip; 
        this.city = city; 
        this.state = state; 
        this.country = country;
        this.isTrainingLocation = isTrainingLocation;
    }

  }
  