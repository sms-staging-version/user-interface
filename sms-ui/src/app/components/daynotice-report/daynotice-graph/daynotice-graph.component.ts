import { Component, OnInit, Input } from '@angular/core';
import { Label, SingleDataSet } from 'ng2-charts';
import { ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-daynotice-graph',
  templateUrl: './daynotice-graph.component.html',
  styleUrls: ['./daynotice-graph.component.scss']
})
export class DaynoticeGraphComponent implements OnInit {


  chartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };

  //in the future, this will not be hard coded values
  public doughnutChartLabels= ['Insufficient Notice', 'Sufficient Notice'];
  public doughnutChartData= [10, 2];
  public doughnutChartType = 'doughnut';

  //in the future, this will not be hard coded values
  public doughnutChartLabels1 = ['Insufficient Notice', 'Sufficient Notice'];
  public doughnutChartData1 = [10, 5];
  public doughnutChartType1 = 'doughnut';

  constructor() { }

  ngOnInit() {

  }

}
