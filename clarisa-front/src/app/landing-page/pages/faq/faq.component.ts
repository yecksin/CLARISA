import { Component, OnInit } from '@angular/core';
import { questionData } from './meta-data/question-data';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {
  informationQuestions: any;
  constructor() {}

  ngOnInit(): void {
    this.informationQuestions = questionData;
  }
}
