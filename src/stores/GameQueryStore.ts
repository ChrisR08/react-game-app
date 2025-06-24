import {create} from 'zustand';

export interface GameQuery {
  search?: string;
  genres?: number;
  parent_platforms?: number;
  ordering?: string;
  page?: number;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchValue: (searchValue: string) => void;
  setGenreId: (genreId?: number) => void;
  resetGenre: () => void;
  setPlatformId: (platformId: number) => void;
  resetPlatform: () => void;
  setOrder: (order: string) => void;
  resetQuery: () => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},

  setSearchValue: (searchValue) =>
    set((store) => ({
      gameQuery: {...store.gameQuery, search: searchValue},
    })),

  setGenreId: (genreId) =>
    set((store) => ({gameQuery: {...store.gameQuery, genres: genreId}})),

  resetGenre: () =>
    set((store) => {
      const {genres, ...rest} = store.gameQuery;
      return {gameQuery: rest};
    }),

  setPlatformId: (platformId) =>
    set((store) => ({
      gameQuery: {...store.gameQuery, parent_platforms: platformId},
    })),

  resetPlatform: () =>
    set((store) => {
      const {parent_platforms, ...rest} = store.gameQuery;
      return {gameQuery: rest};
    }),

  setOrder: (order) =>
    set((store) => ({gameQuery: {...store.gameQuery, ordering: order}})),

  resetQuery: () =>
    set((store) => ({gameQuery: {search: store.gameQuery.search}})),
}));

export default useGameQueryStore;
