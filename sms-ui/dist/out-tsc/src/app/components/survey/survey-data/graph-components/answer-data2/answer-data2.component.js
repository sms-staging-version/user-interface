import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var AnswerData2Component = /** @class */ (function () {
    function AnswerData2Component() {
        this.pieChartOptions = {
            responsive: true,
        };
        this.pieChartLabels = ['YES', 'NO'];
        this.pieChartData = [20, 5];
        this.pieChartType = 'pie';
        this.pieChartLegend = true;
        this.pieChartPlugins = [];
    }
    AnswerData2Component.prototype.ngOnInit = function () {
    };
    AnswerData2Component = tslib_1.__decorate([
        Component({
            selector: 'app-answer-data2',
            templateUrl: './answer-data2.component.html',
            styleUrls: ['./answer-data2.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AnswerData2Component);
    return AnswerData2Component;
}());
export { AnswerData2Component };
//# sourceMappingURL=answer-data2.component.js.map