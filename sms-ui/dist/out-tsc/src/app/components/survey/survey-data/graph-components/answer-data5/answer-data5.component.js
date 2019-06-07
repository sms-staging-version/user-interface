import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var AnswerData5Component = /** @class */ (function () {
    function AnswerData5Component() {
        this.barChartOptions = {
            responsive: true,
        };
        this.barChartLabels = ['Strongly Disagree', 'Disagree', 'N/A', 'Agree', 'Strongly Agree'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartPlugins = [];
        this.barChartData = [
            { data: [3, 19, 12, 10, 5], label: 'Number of Reponses' },
        ];
    }
    AnswerData5Component.prototype.ngOnInit = function () {
    };
    AnswerData5Component = tslib_1.__decorate([
        Component({
            selector: 'app-answer-data5',
            templateUrl: './answer-data5.component.html',
            styleUrls: ['./answer-data5.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AnswerData5Component);
    return AnswerData5Component;
}());
export { AnswerData5Component };
//# sourceMappingURL=answer-data5.component.js.map