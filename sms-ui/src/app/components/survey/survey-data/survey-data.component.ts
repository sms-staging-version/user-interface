import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-survey-data',
  templateUrl: './survey-data.component.html',
  styleUrls: ['./survey-data.component.scss']
})
export class SurveyDataComponent implements OnInit {
  @Input() question: string;
  @Input() type: number; // true for bar chart, false for pie chart
  @Input() arrOfAns: string[];
  @Input() arrOfCountedResponse: number[];
  isBarChart = false;
  isPieChart = false;
  isFeedback = false;
  constructor() { }

  ngOnInit() {
    if (this.type === 5) {
    this.isFeedback = true;
    } else if (this.type === 2 || this.type === 6) {
    this.isPieChart = true;
    } else { this.isBarChart = true; }

  }


}
