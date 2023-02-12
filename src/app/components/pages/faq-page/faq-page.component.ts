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

  constructor(private faqDataService: FaqDataService) {}

  ngOnInit() {
    this.FAQList = this.faqDataService.getFAQs();
  }
}
