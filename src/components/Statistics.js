import React from "react";

const Statistics = () => {
  return (
    <div className="container statistics">
      <div className="row">
        <div className="col-lg-12 mb-5">
          <div className="advanced-statistic">
          
            <h3>Advanced Statistics</h3>
            <p>
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>
        </div>
       
          <div className="col-md-4 statistic-blog">
          <i class="fas fa-adjust"></i>
            <h4>Brand Recognition</h4>
            <p>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
          <div className="col-md-4 statistic-blog">
          <i class="fas fa-adjust"></i>
            <h4>Detailed Records</h4>
            <p>
            Gain insights into who is clicking your links. Knowing when and where 
              people engage with your content helps inform better decisions.
            
            </p>
          </div>
          <div className="col-md-4 statistic-blog">
          <i class="fas fa-adjust"></i>
            <h4>Fully Customizable</h4>
            <p>
            Improve brand awareness and content discoverability through customizable 
              links, supercharging audience engagement.
            
            </p>
          </div>
        
      </div>
    </div>
  );
};

export default Statistics;
