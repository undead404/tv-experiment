import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Shows from "../components/Shows";
import search from "../services/tvmaze/search";
import {
  searchShowsFailure,
  searchShowsStart,
  searchShowsSuccess,
} from "../store/actions/shows";

export default function HomePage(): JSX.Element {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  }, []);
  useEffect(() => {
    if (!searchQuery) {
      dispatch(searchShowsSuccess([]));
      return;
    }
    dispatch(searchShowsStart());
    search(searchQuery)
      .then((shows) => {
        dispatch(searchShowsSuccess(shows));
      })
      .catch((error) => dispatch(searchShowsFailure(error)));
  }, [dispatch, searchQuery]);
  return (
    <div>
      <input onChange={handleChange} value={searchQuery} />
      <Shows />
    </div>
  );
}
