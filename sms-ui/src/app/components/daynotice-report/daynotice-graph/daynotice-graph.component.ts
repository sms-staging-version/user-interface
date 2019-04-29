import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daynotice-graph',
  templateUrl: './daynotice-graph.component.html',
  styleUrls: ['./daynotice-graph.component.scss']
})
export class DaynoticeGraphComponent implements OnInit {
  public doughnutChartLabels = ['Associates with a 24 Hour Notice', 'Associates without  a 24 Hour Notice'];
  public doughnutChartData = [20, 10];
  public doughnutChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
