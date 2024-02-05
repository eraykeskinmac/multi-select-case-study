export interface Character {
  id: number;
  name: string;
  image: string;
  episode: string[];
}

export interface Option {
  value: number;
  label: string;
  image: string;
  episodes: number;
}
