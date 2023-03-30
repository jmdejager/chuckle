import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuoteComponent {
  @Input() public text!: string;
  @Input() public author?: string;
}
