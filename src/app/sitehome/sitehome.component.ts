import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sitehome',
  standalone: true,
  imports: [NgClass, NgFor, NgIf],
  templateUrl: './sitehome.component.html',
  styleUrl: './sitehome.component.scss',
})
export class SitehomeComponent {
  navList = [
    { name: 'Home', flag: 'HM' },
    { name: 'About', flag: 'GL' },
    { name: 'Products', flag: 'AC' },
    { name: 'Partnership', flag: 'PT' },
    { name: 'Competition', flag: 'CP' },
  ];
  products = [
    { name: 'BeeCurious', flag: 'BC' },
    { name: 'Quabits', flag: 'QB' },
    { name: 'Gizmos', flag: 'GM' },
    { name: 'YELP', flag: 'YP' },
    { name: 'Litmus', flag: 'LT' },
    { name: 'School Management', flag: 'SM' },
  ];

  prideList = [
    { name: 'Progress', flag: 'PG', img: 'prd-1' },
    { name: 'Reflection', flag: 'RL', img: 'prd-2' },
    { name: 'Differentiation', flag: 'DF', img: 'prd-3' },
    { name: 'Integration', flag: 'IT', img: 'prd-4' },
    { name: 'Evaluation', flag: 'EV', img: 'prd-5' },
  ];
  images = [
    { img: 'prd-1.webp' },
    { img: 'prd-2.webp' },
    { img: 'prd-3.webp' },
    { img: 'prd-4.webp' },
    { img: 'prd-5.webp' },
  ];
  currentIndex: number = 0;

  constructor() {}

  ngOnInit(): void {
    // setTimeout(() => {
    //   $('.rocket_img').css({'display':'block','position':'relative', right:'25px', top: '-80px'})
    // },5000);
    // window.addEventListener('scroll', function() {
    //   // Check if the page is scrolled
    //   if (window.scrollY > 0) {
    //     $('.rocket_img').css({'display':'block','position':'relative', 'right':'25px', 'top': '-80px'})
    //   } else {
    //     console.log('Page is not scrolled');
    //   }
    // });
    // this.startSlideshow();
  }

  startSlideshow() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 2000);
  }
}
