import {PUSH_FAV} from "../constants/constants";

export function pushFav(title) {
  return {
    type: PUSH_FAV,
    payload: {
      title: title
    }
  }
}