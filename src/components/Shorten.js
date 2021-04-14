import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shortenLink } from "../actions";
import Spinner from "./Spinner";

const Shorten = () => {
  const [link, setLink] = useState("");

  const dispatch = useDispatch();

  const { shortLinks, loading } = useSelector((state) => state.shortenLinks);

  const handleLink = (e) => {
    setLink(e.target.value);
  };

  const handleShortLink = () => {
    dispatch(shortenLink(link));
    setLink("");
  };

  return (
    <div className="container mt-5 search-link">
      <div className="row">
        <div className="col-md-9">
          <div className="form-group">
            <input
              value={link}
              onChange={handleLink}
              className="form-control"
              type="text"
              name="link"
              id="link"
            />
          </div>
        </div>
        <div className="col-md-3">
          <button
            onClick={handleShortLink}
            className="btn btn-primary float-right"
          >
            Shorten
          </button>
        </div>
      </div>
      {loading && <Spinner />}
    </div>
  );
};

export default Shorten;
