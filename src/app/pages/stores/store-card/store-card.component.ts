import { Component, Input, OnInit } from '@angular/core';
import { StoreItem } from '../models/store.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-card',
  templateUrl: './store-card.component.html',
  styleUrls: ['./store-card.component.scss']
})
export class StoreCardComponent implements OnInit {

  @Input() store!: StoreItem;

  constructor(readonly router: Router) { }

  ngOnInit(): void {
  }

  goDetails(id: number){
    this.router.navigate(['/stores', id]);
  }

}
