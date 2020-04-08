import { combineReducers } from "redux";
import { authedUser } from "./authedUser";
import { users } from "./users";
import { questions } from "./questions";
import { loading } from "./loading";
import { displayAnswered } from "./displayAnswered";

export default combineReducers({
  authedUser,
  users,
  questions,
  loading,
  displayAnswered
});