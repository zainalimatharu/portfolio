import React from 'react';

const PortfolioProjects = () => {
  return (
    <div className="row" id="portfolio">
      <div className="container">
        <h4 className="center-align portfolioheading">Portfolio Projects</h4>
        <p className="center-align portfolioheadingdetail">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At, maiores?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, fugiat.
        </p>

        {/* Timeline */}

        <div class="timeline">
          <PortfolioProject
            side="left"
            title="Dev-Connector"
            role="MERN Stack"
            detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. At, maiore Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, fugiat."
          />
          <PortfolioProject
            side="right"
            title="Portfolio Website"
            role="A Portfolio of my Own"
            detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. At, maiores?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, fugiat."
          />
          <PortfolioProject
            side="left"
            title="Tutor Finder"
            role="Final Year Project"
            detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. At, maiores?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, fugiat."
          />
          <PortfolioProject
            side="right"
            title="Al-Madina Free Dispensary"
            role="Website for a Dispensary"
            detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. At, maiores?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, fugiat."
          />
          <PortfolioProject
            side="left"
            title="Task Todo App"
            role="Web-App for managing daily Tasks"
            detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. At, maiores?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, fugiat."
          />
        </div>
      </div>
    </div>
  );
};

const PortfolioProject = props => {
  return (
    <div class={`timeline-container timeline-${props.side}`}>
      <div class="timeline-content">
        <h4 className="timelineheading">{props.title}</h4>
        <small>{props.role}</small>
        <p>{props.detail}</p>
      </div>
    </div>
  );
};

export default PortfolioProjects;
