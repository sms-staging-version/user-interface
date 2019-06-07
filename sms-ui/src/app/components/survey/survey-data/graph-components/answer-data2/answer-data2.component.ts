import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-answer-data2',
  templateUrl: './answer-data2.component.html',
  styleUrls: ['./answer-data2.component.css']
})
/**
 * There are 7 different types of graphs in ngcharts
 * Chart 2 is a pie chart you can find the other charts at:
 * https://valor-software.com/ng2-charts/
 * 
 * This pie chart is mainly used for a 2 choice answers in our surveys
 * This will be accessed when we clicked the data button on all surveys
 */
export class AnswerData2Component implements OnInit {
  @Input() inputAnswers: string[];
  @Input() inputCounts: number[];
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  // public pieChartLabels: Label[] = ['YES', 'NO'];
  // public pieChartData: SingleDataSet = [20, 5];
  public pieChartLabels: Label[];
  public pieChartData: SingleDataSet;
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() { }

  /**
   * This is how we grab store data into 
   */
  ngOnInit() {
    this.pieChartLabels = this.inputAnswers;
    this.pieChartData = this.inputCounts;
  }

}
