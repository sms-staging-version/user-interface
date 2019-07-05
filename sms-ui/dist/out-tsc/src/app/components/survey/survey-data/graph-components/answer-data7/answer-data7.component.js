import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var AnswerData7Component = /** @class */ (function () {
    function AnswerData7Component() {
        this.barChartOptions = {
            responsive: true,
        };
        this.barChartLabels = ['Strongly Disagree', 'Disagree', 'N/A', 'Agree', 'Strongly Agree'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartPlugins = [];
        this.barChartData = [
            { data: [0, 15, 20, 15, 0], label: 'Number of Responses' }
        ];
    }
    AnswerData7Component.prototype.ngOnInit = function () {
    };
    AnswerData7Component = tslib_1.__decorate([
        Component({
            selector: 'app-answer-data7',
            templateUrl: './answer-data7.component.html',
            styleUrls: ['./answer-data7.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AnswerData7Component);
    return AnswerData7Component;
}());
export { AnswerData7Component };
//# sourceMappingURL=answer-data7.component.js.map