import {Component, inject} from '@angular/core';
import {FavoritesService} from "./favorites.service";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  providers: [FavoritesService]
})
export class FavoritesComponent {
  public service = inject(FavoritesService);
}
