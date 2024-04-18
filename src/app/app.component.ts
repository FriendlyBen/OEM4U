import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  @ViewChild('check') check: ElementRef | undefined;
  title = 'OEM4U';
  isNavBarOpen: boolean = false;
  isSelected: string = "home";

  constructor(
    private router: Router
  ){

  }

  ngAfterViewInit() {
    // Dispatch the change event after the view is initialized
    this.goToHomePage();
  }

  toggleNavbar() {
    this.isNavBarOpen = !this.isNavBarOpen;
  }
  
  goToHomePage(){
    this.isSelected = 'home';
    this.toggleNavbar();
    if(this.check !== undefined){
      this.check.nativeElement.checked = false;
    }
    this.router.navigate(['']);
  }

  goToContact(){
    this.isSelected = 'contact';
    this.toggleNavbar();
    if(this.check !== undefined){
      this.check.nativeElement.checked = false;
    }
    this.router.navigate(['/contact']);
  }

  goToAboutPage(){
    this.isSelected = 'about';
    this.toggleNavbar();
    if(this.check !== undefined){
      this.check.nativeElement.checked = false;
    }
    this.router.navigate(['/about'])
  }

  goToLivePage(){
    this.isSelected = 'live';
    this.toggleNavbar();
    if(this.check !== undefined){
      this.check.nativeElement.checked = false;
    }
    this.router.navigate(['/live'])
  }

  goToCenterPage(){
    this.isSelected = 'center';
    this.toggleNavbar();
    if(this.check !== undefined){
      this.check.nativeElement.checked = false;
    }
    this.router.navigate(['/center'])
  }

  gotoFaqPage(){
    this.isSelected = 'faq';
    this.toggleNavbar();
    if(this.check !== undefined){
      this.check.nativeElement.checked = false;
    }
    this.router.navigate(['/faq'])
  }
}
