import {
  SHORTEN_LINK_REQUEST,
  SHORTEN_LINK_SUCCESS,
  SHORTEN_LINK_FAIL,
} from "../constants";

export const shortenLinkReducers = (
  state = { loading: false, shortLinks: [] },
  action
) => {
  switch (action.type) {
    case SHORTEN_LINK_REQUEST:
      return {
        loading: true,
        shortLinks: state.shortLinks,
      };
    case SHORTEN_LINK_SUCCESS:
      console.log(state.shortLinks, "shortlinks");
      return {
        loading: false,
        shortLinks: [...state.shortLinks, action.payload],
      };
    case SHORTEN_LINK_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
