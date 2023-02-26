import { Component } from '@angular/core';

import { FAQItem } from '../../../interfaces/faq.interface';
import { FaqDataService } from '../../../services/faq-data.service';

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.css'],
})
export class FaqPageComponent {
  FAQList: FAQItem[] = [];
  
  faqImageDesktop: string = '/assets/img/illustration-woman-online-desktop.svg';
  faqImageMobile: string = '/assets/img/illustration-woman-online-mobile.svg';

  faqImageBgDesktop: string = '/assets/img/bg-pattern-desktop.svg';
  faqImageBgMobile: string = '/assets/img/bg-pattern-mobile.svg';

  innerWidth: number = window.innerWidth;

  constructor(private faqDataService: FaqDataService) {}

  ngOnInit() {
    this.FAQList = this.faqDataService.getFAQs();
    this.onResizeWindow();
  }

  onResizeWindow() {
    window.addEventListener('resize', (e) => {
      this.innerWidth = window.innerWidth;
    });
  }
}
