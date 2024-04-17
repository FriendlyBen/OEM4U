import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'OEM4U';

  isSelected: string = "home";

  constructor(
    private router: Router
  ){

  }
  
  goToHomePage(){
    this.isSelected = 'home'
    this.router.navigate([''])
  }

  goToContact(){
    this.isSelected = 'contact'
    this.router.navigate(['/contact'])
  }

  goToAboutPage(){
    this.isSelected = 'about'
    this.router.navigate(['/about'])
  }

  goToLivePage(){
    this.isSelected = 'live'
    this.router.navigate(['/live'])
  }

  goToCenterPage(){
    this.isSelected = 'center'
    this.router.navigate(['/center'])
  }

  gotoFaqPage(){
    this.isSelected = 'faq'
    this.router.navigate(['/faq'])
  }
}
