import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-answer-data7',
  templateUrl: './answer-data7.component.html',
  styleUrls: ['./answer-data7.component.css']
})
export class AnswerData7Component implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['Strongly Disagree', 'Disagree', 'N/A', 'Agree', 'Strongly Agree'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [0, 15, 20, 15, 0], label: 'Number of Responses' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
