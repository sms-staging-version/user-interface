import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-answer-data3',
  templateUrl: './answer-data3.component.html',
  styleUrls: ['./answer-data3.component.css']
})
export class AnswerData3Component implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['Hated It', 'Not Satisfied', 'Meh..', 'Satisfied', 'Very Satisfied'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [2, 3, 7, 20, 8], label: 'Number of Responses' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
