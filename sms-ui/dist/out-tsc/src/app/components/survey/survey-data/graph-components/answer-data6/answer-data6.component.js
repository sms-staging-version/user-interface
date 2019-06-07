import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var AnswerData6Component = /** @class */ (function () {
    function AnswerData6Component() {
        this.barChartOptions = {
            responsive: true,
        };
        this.barChartLabels = ['Strongly Disagree', 'Disagree', 'N/A', 'Agree', 'Strongly Agree'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartPlugins = [];
        this.barChartData = [
            { data: [12, 12, 12, 12, 12], label: 'Number of Responses' },
        ];
    }
    AnswerData6Component.prototype.ngOnInit = function () {
    };
    AnswerData6Component = tslib_1.__decorate([
        Component({
            selector: 'app-answer-data6',
            templateUrl: './answer-data6.component.html',
            styleUrls: ['./answer-data6.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AnswerData6Component);
    return AnswerData6Component;
}());
export { AnswerData6Component };
//# sourceMappingURL=answer-data6.component.js.map