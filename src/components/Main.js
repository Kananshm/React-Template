import React from "react";

const Main = () => {
  return (
    <div className="mt-5">
      <div className="container">
        <div className="row hero">
          <div className="col-md-6">
          <div class="hero-left">
          <h2>More than just shorter links</h2>
          <p>Build your brand’s recognition and get detailed insights 
            on how your links are performing.</p>
          <div class="hero-button">
            <a class="btn" href="#" onclick="return false">Get Started</a>
          </div>
        </div>
          </div>
          <div className="col-md-6">
          <div class="hero-right">
          <div class="hero-image">
              <img src="https://a331998513.github.io/projects/url-shortening-api-master/images/illustration-working.svg" alt="working"/>
        </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Main;
