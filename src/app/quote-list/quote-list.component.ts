import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {QuoteListService} from "./quote-list.service";

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.scss'],
  providers: [QuoteListService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuoteListComponent {
  public service = inject(QuoteListService);
}
