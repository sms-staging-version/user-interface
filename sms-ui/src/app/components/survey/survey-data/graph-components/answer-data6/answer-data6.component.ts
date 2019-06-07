import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-answer-data6',
  templateUrl: './answer-data6.component.html',
  styleUrls: ['./answer-data6.component.css']
})
export class AnswerData6Component implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['Strongly Disagree', 'Disagree', 'N/A', 'Agree', 'Strongly Agree'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [12, 12, 12, 12, 12], label: 'Number of Responses' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
