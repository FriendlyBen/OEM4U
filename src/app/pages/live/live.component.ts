import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-live',
  standalone: true,
  imports: [],
  templateUrl: './live.component.html',
  styleUrl: './live.component.scss'
})
export class LiveComponent implements AfterViewInit {

  @ViewChild('myVideo') myVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
      if(this.myVideo && this.myVideo.nativeElement){
        this.myVideo.nativeElement.volume = 0.3;
      }
  }
}
