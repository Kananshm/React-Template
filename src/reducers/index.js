import { combineReducers } from "redux";
import { shortenLinkReducers } from "./shortenLinksReducers";

export default combineReducers({
  shortenLinks: shortenLinkReducers,
});
