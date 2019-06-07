export class status {
    statusId: number ;
    generalStatus: string;
    specificStatus: string; 
    virtual: boolean;

    constructor(statusid: number, genstatus: string, specstatus: string, virtual: boolean){
            this.statusId = statusid; 
            this.generalStatus = genstatus; 
            this.specificStatus = specstatus; 
            this.virtual = virtual; 
    }
    
 }
 