import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-sitehome',
  standalone: true,
  imports: [NgClass, NgFor, NgIf],
  templateUrl: './sitehome.component.html',
  styleUrl: './sitehome.component.scss',
})
export class SitehomeComponent {
  products = [
    { name: 'BeeCurious', flag: 'BC' },
    { name: 'Quabits', flag: 'QB' },
    { name: 'Gizmos', flag: 'GM' },
    { name: 'YELP', flag: 'YP' },
    { name: 'Litmus', flag: 'LT' },
    { name: 'School Management', flag: 'SM' },
  ];

  navList = [
    { name: 'Home', flag: 'HM', sublist: [] },
    { name: 'About', flag: 'AB', sublist: [] },
    { name: 'Products', flag: 'PD', sublist: this.products },
    { name: 'Partnership', flag: 'PT', sublist: [] },
    { name: 'Competition', flag: 'CP', sublist: [] },
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
    $('.rocket_img').animate(
      {
        top: '-70px',
        right: '80px',
      },
      3000
    );
  }

  startSlideshow() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 2000);
  }

  // dropdown(ele: any) {
  //   $('.drop_down_div').hide('3000');
  //   if (
  //     $(ele).closest('li').attr('id') == 'AB' ||
  //     $(ele).closest('li').attr('id') == 'PD'
  //   ) {
  //     $(ele).css({ position: 'relative' });
  //     $(ele).closest('li').find('.ddl').append($('.drop_down_div'));
  //     $('.drop_down_div').slideDown('8000');
  //   } else {
  //     $('.drop_down_div').slideUp('3000');
  //   }
  // }
}
