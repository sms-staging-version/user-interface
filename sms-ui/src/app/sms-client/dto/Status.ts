export class status {
    status_id: number ;
    generic_status: string;
    specific_status: string; 
    virtual: boolean;

    constructor(statusid: number, genstatus: string, specstatus: string, virtual: boolean){
            this.status_id = statusid; 
            this.generic_status = genstatus; 
            this.specific_status = specstatus; 
            this.virtual = virtual; 
    }
    
 }
 