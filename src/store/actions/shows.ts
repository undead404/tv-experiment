import { Action } from "redux";
import { Show } from "../../types";
import { SHOWS_SEARCH_FAILURE, SHOWS_SEARCH_START, SHOWS_SEARCH_SUCCESS } from "../constants";

export function searchShowsStart(): Action<typeof SHOWS_SEARCH_START> {
    return {
        type: SHOWS_SEARCH_START
    }
}

export function searchShowsSuccess(shows: Show[]): {
    shows: Show[],
    type: typeof SHOWS_SEARCH_SUCCESS,
} {
    return {
        shows,
        type: SHOWS_SEARCH_SUCCESS
    }
}

export function searchShowsFailure(error: Error) {
    return {
        error,
        type: SHOWS_SEARCH_FAILURE,
    }
}