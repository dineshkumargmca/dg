import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'dg-stack',
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.scss',
})
export class DgStackComponent {
  @Input() direction: 'row' | 'column' = 'column';
  @Input() alignment: 'start' | 'center' | 'end' | 'stretch' = 'stretch';
  @Input() justify:
    | 'start'
    | 'center'
    | 'end'
    | 'between'
    | 'around'
    | 'evenly' = 'start';
  @Input() reverse = false;
  @Input() gap = 0;
}
