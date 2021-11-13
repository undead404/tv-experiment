import axios from "axios";
import { Show, ShowsSearchResultItem } from "../../types";

export default async function search(query: string): Promise<Show[]> {
  const response = await axios.get<ShowsSearchResultItem[]>(
    `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`
  );
  return response.data.map((searchResultItem) => searchResultItem.show);
}
