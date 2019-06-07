import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var AnswerData3Component = /** @class */ (function () {
    function AnswerData3Component() {
        this.barChartOptions = {
            responsive: true,
        };
        this.barChartLabels = ['Hated It', 'Not Satisfied', 'Meh..', 'Satisfied', 'Very Satisfied'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartPlugins = [];
        this.barChartData = [
            { data: [2, 3, 7, 20, 8], label: 'Number of Responses' }
        ];
    }
    AnswerData3Component.prototype.ngOnInit = function () {
    };
    AnswerData3Component = tslib_1.__decorate([
        Component({
            selector: 'app-answer-data3',
            templateUrl: './answer-data3.component.html',
            styleUrls: ['./answer-data3.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AnswerData3Component);
    return AnswerData3Component;
}());
export { AnswerData3Component };
//# sourceMappingURL=answer-data3.component.js.map