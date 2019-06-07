import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-answer-data1',
  templateUrl: './answer-data1.component.html',
  styleUrls: ['./answer-data1.component.css']
})

/**
 * The purpose of this class is to two provide a modular way to display our graphs from ng-charts
 */
export class AnswerData1Component implements OnInit {

  @Input() inputAnswers: string[];
  @Input() inputCounts: number[];
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[];
  /**
   * This is what the data would look like if it were hardcoded
   */
  // public barChartLabels: Label[] = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6',
  // 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14 or More'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  // public barChartData: ChartDataSets[] = [
  //   { data: [30, 20, 19, 18, 18, 18, 17, 16, 16, 16, 15, 15, 15], label: 'Number of Responses' }
  // ];

  public barChartData: ChartDataSets[];

  constructor() { }

  /**
   * We use ngOnInit to load the data from the survey-data class
   */
  ngOnInit() {
    this.barChartLabels = this.inputAnswers;
    this.barChartData = [
      { data: this.inputCounts, label: 'Number of Responses' }
    ];
  }
/**
 * Special effects for the graphs
 */
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
