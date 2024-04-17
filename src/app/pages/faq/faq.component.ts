import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {

  showThisAnswer: number = 0;

  showAnswer(whichAnswer: number){
    if(this.showThisAnswer === whichAnswer){
      this.showThisAnswer = 0;
    }
    else{
      this.showThisAnswer = whichAnswer;
    }
  }
}
