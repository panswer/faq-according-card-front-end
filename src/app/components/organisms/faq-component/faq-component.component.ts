import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { FAQItem } from '../../../interfaces/faq.interface';

@Component({
  selector: 'app-faq-component',
  templateUrl: './faq-component.component.html',
  styleUrls: ['./faq-component.component.css'],
})
export class FaqComponentComponent {
  titleText: string = 'How many team members can I invite?';
  descriptionText: string =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, itaque.';

  isChecked = new FormControl(false);

  @Input() faq?: FAQItem;
}
