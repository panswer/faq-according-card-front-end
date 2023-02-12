import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-basic',
  templateUrl: './text-basic.component.html',
  styleUrls: ['./text-basic.component.css'],
})
export class TextBasicComponent {
  @Input() text!: string;
}
