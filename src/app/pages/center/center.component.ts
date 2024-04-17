import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-center',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './center.component.html',
  styleUrl: './center.component.scss'
})
export class CenterComponent {
  whichCategory: number = 1;

  chooseCategory(category:number){
    this.whichCategory = category;
  }
}
