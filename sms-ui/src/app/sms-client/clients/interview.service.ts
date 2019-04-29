import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Interview } from '../dto/Interview';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {

  private urlVar = 'interview-service/interview';

  private interviewList = [
    {
        id: 1,
        managerEmail: 'blake.kruppa@revature.com',
        associateEmail: 'loricodes@gmail.com',
        scheduled: 1551373200000,
        notified: 1551380400000,
        reviewed: 1551474000000,
        place: 'USF',
        feedback: {
            id: 1,
            feedbackRequested: 1551463200000,
            feedback: 'Solid interview.',
            feedbackReceived: 1551553200000,
            feedbackDelivered: 1551643200000,
            status: {
                feedback_status_id: 1,
                feedback_status_desc: 'Pending'
            }
        },
        associateInput: {
            id: 1,
            receivedNotifications: 1551380400000,
            descriptionProvided: true,
            interviewFormat: {
                id: 1,
                formatDesc: 'On Site'
            },
            proposedFormat: {
                id: 1,
                formatDesc: 'On Site'
            }
        },
        client: {
            clientId: 1,
            clientName: 'Dell'
        }
    },
    {
        id: 2,
        managerEmail: 'blake.kruppa@revature.com',
        associateEmail: 'kenneth.james.currie@gmail.com',
        scheduled: 1551373200000,
        notified: 1551364200000,
        reviewed: 1551560400000,
        place: 'USF',
        feedback: {
            id: 2,
            feedbackRequested: 1551549600000,
            feedback: 'Solid interview.',
            feedbackReceived: 1551639600000,
            feedbackDelivered: 1551729600000,
            status: {
                feedback_status_id: 2,
                feedback_status_desc: 'No Feedback'
            }
        },
        associateInput: {
            id: 2,
            receivedNotifications: 1551287700000,
            descriptionProvided: true,
            interviewFormat: {
                id: 2,
                formatDesc: 'In Person'
            },
            proposedFormat: {
                id: 2,
                formatDesc: 'In Person'
            }
        },
        client: {
            clientId: 1,
            clientName: 'Dell'
        }
    },
    {
        id: 3,
        managerEmail: 'blake.kruppa@revature.com',
        associateEmail: 'dfeli014@fiu.edu',
        scheduled: 1551373200000,
        notified: 1551294000000,
        reviewed: 1551646800000,
        place: 'Reston',
        feedback: {
            id: 3,
            feedbackRequested: 1551636000000,
            feedback: 'Solid interview.',
            feedbackReceived: 1551726000000,
            feedbackDelivered: 1551816000000,
            status: {
                feedback_status_id: 3,
                feedback_status_desc: 'Selected for Second Round'
            }
        },
        associateInput: {
            id: 3,
            receivedNotifications: 1551286800000,
            descriptionProvided: true,
            interviewFormat: {
                id: 3,
                formatDesc: 'Video Call'
            },
            proposedFormat: {
                id: 3,
                formatDesc: 'Video Call'
            }
        },
        client: {
            clientId: 1,
            clientName: 'Dell'
        }
    },
    {
        id: 6,
        managerEmail: 'blake.kruppa@revature.com',
        associateEmail: 'agrav12825@gmail.com',
        scheduled: 1551373200000,
        notified: 1551380400000,
        reviewed: null,
        place: 'USF',
        feedback: null,
        associateInput: null,
        client: {
            clientId: 2,
            clientName: 'Hewlett Packard'
        }
    },
    {
        id: 7,
        managerEmail: 'blake.kruppa@revature.com',
        associateEmail: 'goncalvesjohnp@gmail.com',
        scheduled: 1907193600000,
        notified: null,
        reviewed: null,
        place: 'Here',
        feedback: null,
        associateInput: null,
        client: {
            clientId: 1,
            clientName: 'Dell'
        }
    },
    {
        id: 5,
        managerEmail: 'blake.kruppa@revature.com',
        associateEmail: 'goncalvesjohnp@gmail.com',
        scheduled: 1551373200000,
        notified: 1551286800000,
        reviewed: 1555684610448,
        place: 'USF',
        feedback: {
            id: 5,
            feedbackRequested: 1551808800000,
            feedback: 'Solid interview.',
            feedbackReceived: 1551898800000,
            feedbackDelivered: 1551988800000,
            status: {
                feedback_status_id: 5,
                feedback_status_desc: 'Selected'
            }
        },
        associateInput: null,
        client: {
            clientId: 2,
            clientName: 'Hewlett Packard'
        }
    },
    {
        id: 4,
        managerEmail: 'blake.kruppa@revature.com',
        associateEmail: 'mohamedwomar21@gmail.com',
        scheduled: 1551373200000,
        notified: 1551380400000,
        reviewed: 1555684612422,
        place: 'Reston',
        feedback: {
            id: 4,
            feedbackRequested: 1551722400000,
            feedback: 'Solid interview.',
            feedbackReceived: 1551812400000,
            feedbackDelivered: 1551902400000,
            status: {
                feedback_status_id: 4,
                feedback_status_desc: 'Direct Hire'
            }
        },
        associateInput: {
            id: 4,
            receivedNotifications: 1551718800000,
            descriptionProvided: true,
            interviewFormat: {
                id: 1,
                formatDesc: 'On Site'
            },
            proposedFormat: {
                id: 4,
                formatDesc: 'Phone Call'
            }
        },
        client: {
            clientId: 2,
            clientName: 'Hewlett Packard'
        }
    },
    {
        id: 1,
        managerEmail: 'blake.kruppa@revature.com',
        associateEmail: 'loricodes@gmail.com',
        scheduled: 1551373200000,
        notified: 1551380400000,
        reviewed: 1551474000000,
        place: 'USF',
        feedback: {
            id: 1,
            feedbackRequested: 1551463200000,
            feedback: 'Solid interview.',
            feedbackReceived: 1551553200000,
            feedbackDelivered: 1551643200000,
            status: {
                feedback_status_id: 1,
                feedback_status_desc: 'Pending'
            }
        },
        associateInput: {
            id: 1,
            receivedNotifications: 1551380400000,
            descriptionProvided: true,
            interviewFormat: {
                id: 1,
                formatDesc: 'On Site'
            },
            proposedFormat: {
                id: 1,
                formatDesc: 'On Site'
            }
        },
        client: {
            clientId: 1,
            clientName: 'Dell'
        }
    },
    {
        id: 2,
        managerEmail: 'blake.kruppa@revature.com',
        associateEmail: 'kenneth.james.currie@gmail.com',
        scheduled: 1551373200000,
        notified: 1551364200000,
        reviewed: 1551560400000,
        place: 'USF',
        feedback: {
            id: 2,
            feedbackRequested: 1551549600000,
            feedback: 'Solid interview.',
            feedbackReceived: 1551639600000,
            feedbackDelivered: 1551729600000,
            status: {
                feedback_status_id: 2,
                feedback_status_desc: 'No Feedback'
            }
        },
        associateInput: {
            id: 2,
            receivedNotifications: 1551287700000,
            descriptionProvided: true,
            interviewFormat: {
                id: 2,
                formatDesc: 'In Person'
            },
            proposedFormat: {
                id: 2,
                formatDesc: 'In Person'
            }
        },
        client: {
            clientId: 1,
            clientName: 'Dell'
        }
    },
    {
        id: 3,
        managerEmail: 'blake.kruppa@revature.com',
        associateEmail: 'dfeli014@fiu.edu',
        scheduled: 1551373200000,
        notified: 1551294000000,
        reviewed: 1551646800000,
        place: 'Reston',
        feedback: {
            id: 3,
            feedbackRequested: 1551636000000,
            feedback: 'Solid interview.',
            feedbackReceived: 1551726000000,
            feedbackDelivered: 1551816000000,
            status: {
                feedback_status_id: 3,
                feedback_status_desc: 'Selected for Second Round'
            }
        },
        associateInput: {
            id: 3,
            receivedNotifications: 1551286800000,
            descriptionProvided: true,
            interviewFormat: {
                id: 3,
                formatDesc: 'Video Call'
            },
            proposedFormat: {
                id: 3,
                formatDesc: 'Video Call'
            }
        },
        client: {
            clientId: 1,
            clientName: 'Dell'
        }
    },
    {
        id: 6,
        managerEmail: 'blake.kruppa@revature.com',
        associateEmail: 'agrav12825@gmail.com',
        scheduled: 1551373200000,
        notified: 1551380400000,
        reviewed: null,
        place: 'USF',
        feedback: null,
        associateInput: null,
        client: {
            clientId: 2,
            clientName: 'Hewlett Packard'
        }
    },
    {
        id: 7,
        managerEmail: 'blake.kruppa@revature.com',
        associateEmail: 'goncalvesjohnp@gmail.com',
        scheduled: 1907193600000,
        notified: null,
        reviewed: null,
        place: 'Here',
        feedback: null,
        associateInput: null,
        client: {
            clientId: 1,
            clientName: 'Dell'
        }
    },
    {
        id: 5,
        managerEmail: 'blake.kruppa@revature.com',
        associateEmail: 'goncalvesjohnp@gmail.com',
        scheduled: 1551373200000,
        notified: 1551286800000,
        reviewed: 1555684610448,
        place: 'USF',
        feedback: {
            id: 5,
            feedbackRequested: 1551808800000,
            feedback: 'Solid interview.',
            feedbackReceived: 1551898800000,
            feedbackDelivered: 1551988800000,
            status: {
                feedback_status_id: 5,
                feedback_status_desc: 'Selected'
            }
        },
        associateInput: null,
        client: {
            clientId: 2,
            clientName: 'Hewlett Packard'
        }
    },
    {
        id: 4,
        managerEmail: 'blake.kruppa@revature.com',
        associateEmail: 'mohamedwomar21@gmail.com',
        scheduled: 1551373200000,
        notified: 1551380400000,
        reviewed: 1555684612422,
        place: 'Reston',
        feedback: {
            id: 4,
            feedbackRequested: 1551722400000,
            feedback: 'Solid interview.',
            feedbackReceived: 1551812400000,
            feedbackDelivered: 1551902400000,
            status: {
                feedback_status_id: 4,
                feedback_status_desc: 'Direct Hire'
            }
        },
        associateInput: {
            id: 4,
            receivedNotifications: 1551718800000,
            descriptionProvided: true,
            interviewFormat: {
                id: 1,
                formatDesc: 'On Site'
            },
            proposedFormat: {
                id: 4,
                formatDesc: 'Phone Call'
            }
        },
        client: {
            clientId: 2,
            clientName: 'Hewlett Packard'
        }
    }
];

  constructor(private httpCli: HttpClient) { }

  getInterviews(): Observable<Interview[]> {
    return this.httpCli.get<Interview[]>(`${this.urlVar}`);
  }

  getInterviews2(): Interview[] {
    return this.interviewList;
  }
}
