import React from "react";

const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="left-nav-menu col-md-10">
            <img src="https://a331998513.github.io/projects/url-shortening-api-master/images/logo.svg" />
            <div className="nav-menues">
              <a href="#" >
                Features
              </a>
              <a href="#">
                Pricing
              </a>
              <a href="#">
                Resources
              </a>
            </div>
          </div>
          <div className="col-md-2">
            <div className="right-nav-menu">
              <a href="#">
                Login
              </a>
              <a href="#">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
