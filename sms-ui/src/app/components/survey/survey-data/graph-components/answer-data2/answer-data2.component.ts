import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-answer-data2',
  templateUrl: './answer-data2.component.html',
  styleUrls: ['./answer-data2.component.css']
})
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

  ngOnInit() {
    this.pieChartLabels = this.inputAnswers;
    this.pieChartData = this.inputCounts;
  }

}
