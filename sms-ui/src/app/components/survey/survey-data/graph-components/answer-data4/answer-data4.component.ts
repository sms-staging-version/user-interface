import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-answer-data4',
  templateUrl: './answer-data4.component.html',
  styleUrls: ['./answer-data4.component.css']
})
export class AnswerData4Component implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['Strongly Disagree', 'Disagree', 'N/A', 'Agree', 'Strongly Agree'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [0, 1, 2, 3, 4], label: 'Number of Responses' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
