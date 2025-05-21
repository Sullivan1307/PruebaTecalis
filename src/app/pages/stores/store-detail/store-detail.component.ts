import { Component, OnInit } from '@angular/core';
import { StoreDetails, StoreItem, StoreRs } from '../models/store.model';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from '../store.service';
import { Game, GameList } from '../../games/models/game.model';
import { GameService } from '../../games/game.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { GameModalComponent } from '../../games/game-modal/game-modal.component';

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.scss']
})
export class StoreDetailComponent implements OnInit {

  store?: StoreItem
  storeDetails?: StoreDetails;
  cleanedDescription?: string;
  gameList: GameList[] = [];
  games: Game[] = [];
  modalRef?: BsModalRef;

  constructor(
    readonly route: ActivatedRoute,
    readonly storeService: StoreService,
    readonly gameService: GameService,
    readonly modalService: BsModalService,
    readonly router: Router
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params['id']);
    if(id){
      this.storeService.getStores().subscribe({
        next: (data: StoreRs) => {
          this.store = data.results.find((store: StoreItem) => store.id === id);
          this.getGamesImg(this.store?.games);
        },
        error: (err) => {
          console.error('Error cargando tienda:', err);
        }
      });
    }
    this.storeService.getStoreDetails(id).subscribe({
      next: (data) => {
        this.storeDetails = data;
        this.cleanedDescription = this.storeDetails.description.replace(/^<p>|<\/p>$/g, '');
      },
      error: (err) => {
        console.error('Error cargando detalles de la tienda:', err);
      }
    });
  }

  getGamesImg(games: GameList[]): void {
    games.forEach(game => {
      this.gameService.getGameDetails(game.id).subscribe(data => {
        this.games.push(data);
      })
    })
  }

  openModal(game: Game) {
    this.modalRef = this.modalService.show(GameModalComponent, {
      initialState: {
        game: game
      },
      class: 'modal-xl',
    });
  }

  goBack() {
    this.router.navigate(['/stores']);
  }
}
