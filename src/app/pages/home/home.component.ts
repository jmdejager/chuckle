import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {HomeService} from "./home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HomeService]
})
export class HomeComponent {
  public service = inject(HomeService);
}
