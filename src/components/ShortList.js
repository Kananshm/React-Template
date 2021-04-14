import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const ShortList = () => {
  const { shortLinks } = useSelector((state) => state.shortenLinks);

  const handleCopy = (e, link) => {
    console.log(link, "link");
    navigator.clipboard.writeText(link);
  };

  if (shortLinks.length === 0) {
    return null;
  }

  return (
    <div className="container">
      {shortLinks.map((link) => {
        return (
          <div
            key={link.code}
            className="d-flex justify-content-between align-item-center p-3"
          >
            <p>{link.short_link}</p>
            <button
              onClick={(e) => handleCopy(e, link.short_link)}
              className="btn btn-secondary"
            >
              Copy
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ShortList;
