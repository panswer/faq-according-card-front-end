import { Injectable } from '@angular/core';
import { FAQItem } from '../interfaces/faq.interface';

@Injectable({
  providedIn: 'root',
})
export class FaqDataService {
  private FAQs: FAQItem[];

  constructor() {
    this.FAQs = [
      {
        description: '',
        id: 'option-1',
        isCheck: true,
        title: 'How many team members can I invited?',
      },
      {
        description:
          'No more than 2GB. All files is your account must fit your alloted storage space',
        id: 'option-2',
        isCheck: false,
        title: 'What is the maximum file upload size?',
      },
      {
        description: '',
        id: 'option-3',
        isCheck: false,
        title: 'How do I reset my password?',
      },
      {
        description: '',
        id: 'option-4',
        isCheck: false,
        title: 'Can I cancel my subscription?',
      },
      {
        description: '',
        id: 'option-5',
        isCheck: false,
        title: 'Do you provide additional support?',
      },
    ];
  }

  getFAQs(): FAQItem[] {
    return this.FAQs;
  }
}
