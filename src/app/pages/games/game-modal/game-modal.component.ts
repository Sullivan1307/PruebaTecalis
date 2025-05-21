import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Game } from '../models/game.model';

@Component({
  selector: 'app-game-modal',
  templateUrl: './game-modal.component.html',
  styleUrls: ['./game-modal.component.scss']
})
export class GameModalComponent implements OnInit {
  game: Game
  imgs: string[] = [];

  constructor(public modalRef: BsModalRef) { }

  ngOnInit(): void {
  this.imgs = [];
    if (this.game.background_image) {
      this.imgs.push(this.game.background_image); 
    }
    if (this.game.background_image_additional) {
      this.imgs.push(this.game.background_image_additional); 
    }
  }
}
