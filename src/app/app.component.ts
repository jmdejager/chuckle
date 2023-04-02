import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';
import {FavoriteQuotesRepositoryInterface} from "../domain/favorite-quotes-repository.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private favoriteQuotesRepository = inject<FavoriteQuotesRepositoryInterface>(FavoriteQuotesRepositoryInterface)
  public favoritesCount = this.favoriteQuotesRepository.getFavorites();
}
