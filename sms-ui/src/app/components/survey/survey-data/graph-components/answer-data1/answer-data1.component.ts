import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-answer-data1',
  templateUrl: './answer-data1.component.html',
  styleUrls: ['./answer-data1.component.css']
})
export class AnswerData1Component implements OnInit {
/* TODO: un hard code this data */
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 50, 60, 56, 55, 40], label: 'Series A' },
    { data: [50, 35, 40, 30, 45, 22, 22], label: 'Super Cow'}
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor() { }

  ngOnInit() {
  }

}
