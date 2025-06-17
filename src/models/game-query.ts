interface GameQueryBase {
  search: string;
  genres: string;
  tags: string;
  dates: string;
  parent_platforms: number;
  metacritic: string;
  ordering: string;
  page: number;
}

export type GameQuery = Partial<GameQueryBase>;
