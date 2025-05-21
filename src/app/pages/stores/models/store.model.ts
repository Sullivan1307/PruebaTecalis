import { GameList } from "../../games/models/game.model"

export interface StoreRs {
  count: number;
  next: string | null;
  previous: string | null;
  results: StoreItem[]
}

export interface StoreItem {
  id: number;
  name: string;
  domain: string;
  slug: string;
  games_count: number;
  image_background: string;
  games: GameList[];
}

export interface StoreDetails {
  id: number; 
  name: string;
  description: string;
  image_background: string;
}