import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-survey-data',
  templateUrl: './survey-data.component.html',
  styleUrls: ['./survey-data.component.scss']
})

/**
 * This class is used with with the answer-data in the graph data folder
 * in order to get the data to display on the html page
 */
export class SurveyDataComponent implements OnInit {
  @Input() question: string;
  @Input() type: number; // true for bar chart, false for pie chart
  @Input() arrOfAns: string[];
  @Input() arrOfCountedResponse: number[];
  isBarChart = false;
  isPieChart = false;
  isFeedback = false;
  constructor() { }

  /**
   * This is loading the different question types from the database in order
   * to put question types correctly in the surveys as well as to use the correct
   * graph type to generate
   */
  ngOnInit() {
    if (this.type === 5) {
    this.isFeedback = true;
    } else if (this.type === 1 || this.type === 6) {
    this.isPieChart = true;
    } else { this.isBarChart = true; }

  }


}
