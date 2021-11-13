import { Show } from "../../types";
import {
  searchShowsFailure,
  searchShowsStart,
  searchShowsSuccess,
} from "../actions/shows";
import {
  SHOWS_SEARCH_FAILURE,
  SHOWS_SEARCH_START,
  SHOWS_SEARCH_SUCCESS,
} from "../constants";

export interface ShowsState {
  error: Error | null;
  isLoading: boolean;
  shows: Show[];
}

export default function showsReducer(
  state: ShowsState = {
    error: null,
    isLoading: false,
    shows: [],
  },
  action:
    | ReturnType<typeof searchShowsStart>
    | ReturnType<typeof searchShowsSuccess>
    | ReturnType<typeof searchShowsFailure>
) {
  switch (action.type) {
    case SHOWS_SEARCH_START:
      return {
        ...state,
        isLoading: true,
      };
    case SHOWS_SEARCH_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        shows: (action as ReturnType<typeof searchShowsSuccess>).shows,
      };
    case SHOWS_SEARCH_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
        shows: [],
      };
  }
  return state;
}
