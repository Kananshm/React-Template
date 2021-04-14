import axios from "axios";
import { SHORTEN_LINK_SUCCESS, SHORTEN_LINK_REQUEST } from "../constants/index";

export const shortenLink = (url) => async (dispatch, getState) => {
  dispatch({
    type: SHORTEN_LINK_REQUEST,
  });

  const { data } = await axios.get(
    `https://api.shrtco.de/v2/shorten?url=${url}`
  );

  dispatch({ type: SHORTEN_LINK_SUCCESS, payload: data.result });
};
