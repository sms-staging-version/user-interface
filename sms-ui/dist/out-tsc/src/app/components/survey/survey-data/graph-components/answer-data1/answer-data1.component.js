import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var AnswerData1Component = /** @class */ (function () {
    function AnswerData1Component() {
        this.barChartOptions = {
            responsive: true,
            scales: { xAxes: [{}], yAxes: [{}] },
            plugins: {
                datalabels: {
                    anchor: 'end',
                    align: 'end',
                },
            }
        };
        this.barChartLabels = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6',
            'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14 or More'];
        this.barChartType = 'bar';
        this.chartColors = [
            {
                backgroundColor: 'orange',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'orange',
                borderColor: 'orange',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(255,0,0,0.3)',
                borderColor: 'red',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.barChartLegend = true;
        this.barChartData = [
            { data: [30, 20, 19, 18, 18, 18, 17, 16, 16, 16, 15, 15, 15], label: 'Number of Responses' }
        ];
    }
    AnswerData1Component.prototype.ngOnInit = function () {
    };
    // events
    AnswerData1Component.prototype.chartClicked = function (_a) {
        var event = _a.event, active = _a.active;
        console.log(event, active);
    };
    AnswerData1Component.prototype.chartHovered = function (_a) {
        var event = _a.event, active = _a.active;
        console.log(event, active);
    };
    AnswerData1Component = tslib_1.__decorate([
        Component({
            selector: 'app-answer-data1',
            templateUrl: './answer-data1.component.html',
            styleUrls: ['./answer-data1.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AnswerData1Component);
    return AnswerData1Component;
}());
export { AnswerData1Component };
//# sourceMappingURL=answer-data1.component.js.map