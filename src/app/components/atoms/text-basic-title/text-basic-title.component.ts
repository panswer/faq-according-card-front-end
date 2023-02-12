import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-basic-title',
  templateUrl: './text-basic-title.component.html',
  styleUrls: ['./text-basic-title.component.css'],
})
export class TextBasicTitleComponent {
  @Input() text!: string;
  @Input() isBold?: boolean;

  attClass: string = 'text-basic-title';

  ngOnInit() {
    if (this.isBold) {
      this.attClass += ' active';
    }
  }
}
