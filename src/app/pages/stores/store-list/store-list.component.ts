import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { StoreItem, StoreRs } from '../models/store.model';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.scss']
})
export class StoreListComponent implements OnInit {

  stores: StoreItem[] = []; 

  constructor( readonly storeService: StoreService) { }

  ngOnInit(): void {
    this.storeService.getStores().subscribe({
      next: (data: StoreRs) => {
        this.stores = data.results;
      },
      error: (err) => {
        console.error('Error cargando tiendas:', err);
      }
    });
  }

}
