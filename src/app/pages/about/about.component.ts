import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    const imageUrls = [
      'assets/bottlesAndmachinery.png',
      'assets/automated-packaging.jpg',
      'assets/filling-cream.jpg',
      'assets/bottle-queue.jpg',
      // Add more image URLs here
    ];

    this.preloadImages(imageUrls)
      .then(() => {
        console.log('All images are loaded');
        // Proceed with displaying the page content or performing other actions
      })
      .catch(() => {
        console.error('Some images failed to load');
        // Handle errors if necessary
      });
  }

  private preloadImages(imageUrls: string[]): Promise<void[]> {
    const promises: Promise<void>[] = [];

    imageUrls.forEach(url => {
      const promise = new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => reject();
        img.src = url;
      });
      promises.push(promise);
    });

    return Promise.all(promises);
  }
}
