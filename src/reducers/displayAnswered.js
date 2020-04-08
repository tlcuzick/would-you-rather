import {
  DISPLAY_ANSWERED,
  DISPLAY_UNANSWERED
} from "../actions/displayAnswered";

export const displayAnswered = (state = false, action) => {
  switch (action.type) {
    case DISPLAY_ANSWERED:
      return true;
    case DISPLAY_UNANSWERED:
      return false;
    default:
      return state;
  }
};