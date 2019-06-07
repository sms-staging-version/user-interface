import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var AnswerData4Component = /** @class */ (function () {
    function AnswerData4Component() {
        this.barChartOptions = {
            responsive: true,
        };
        this.barChartLabels = ['Strongly Disagree', 'Disagree', 'N/A', 'Agree', 'Strongly Agree'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartPlugins = [];
        this.barChartData = [
            { data: [0, 1, 2, 3, 4], label: 'Number of Responses' }
        ];
    }
    AnswerData4Component.prototype.ngOnInit = function () {
    };
    AnswerData4Component = tslib_1.__decorate([
        Component({
            selector: 'app-answer-data4',
            templateUrl: './answer-data4.component.html',
            styleUrls: ['./answer-data4.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AnswerData4Component);
    return AnswerData4Component;
}());
export { AnswerData4Component };
//# sourceMappingURL=answer-data4.component.js.map