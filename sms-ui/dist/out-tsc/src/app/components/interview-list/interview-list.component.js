import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { InterviewService } from 'src/app/services/interview.service';
var InterviewListComponent = /** @class */ (function () {
    function InterviewListComponent(interview) {
        this.interview = interview;
        this.interviewList = this.interview.getInterviews2();
        this.filteredInterviewList = this.interviewList;
        console.log(this.filteredInterviewList);
    }
    InterviewListComponent.prototype.ngOnInit = function () {
    };
    InterviewListComponent.prototype.buttonClicked = function () {
        /* this.interview.getInterviews().subscribe(
          data => {
            console.log(data);
          }
        ); */
        this.interviewList = this.interview.getInterviews2();
        this.filteredInterviewList = this.interviewList;
        console.log(this.filteredInterviewList);
    };
    InterviewListComponent = tslib_1.__decorate([
        Component({
            selector: 'app-interview-list',
            templateUrl: './interview-list.component.html',
            styleUrls: ['./interview-list.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [InterviewService])
    ], InterviewListComponent);
    return InterviewListComponent;
}());
export { InterviewListComponent };
//# sourceMappingURL=interview-list.component.js.map