export interface Show {
  _links: {
    self: {
      href: string;
    };
  };
  id: number;
  image?: {
    medium: string;
  };
  name: string;
  premiered: string;
  rating: {
    average: number;
  };
}

export interface ShowsSearchResultItem {
  score: number;
  show: Show;
}
