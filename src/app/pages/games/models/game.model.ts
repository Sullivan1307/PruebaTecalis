export interface GameList {
  id: number
  slug: string
  name: string
  added: number
}

export interface Game {
  id: number
  name: string;
  rating: number;
  ratings_count: number;
  released: string;
  background_image: string;
  background_image_additional: string;
  description_raw: string;
}