import React, { Fragment } from 'react';
import skillssideimage from './skillssideimage.jpg';

const Skills = () => {
  return (
    <Fragment>
      <div className="skills">
        <Left />
        <Right />
      </div>
    </Fragment>
  );
};

const Left = () => {
  return (
    <div className="skills-left">
      <img src={skillssideimage} alt="Zain's" />
    </div>
  );
};

const Right = () => {
  const changeLanguageColor = e => {
    document.getElementById('LanguagesLink').className += ' button-active';
    document.getElementById(
      'FrameworksLink'
    ).className = document
      .getElementById('FrameworksLink')
      .className.replace(' button-active');
    document.getElementById('OthersLink').className = document
      .getElementById('OthersLink')
      .className.replace(' button-active');
  };
  const changeFrameworksColor = e => {
    document.getElementById(
      'LanguagesLink'
    ).className = document
      .getElementById('LanguagesLink')
      .className.replace(' button-active');
    document.getElementById('FrameworksLink').className += ' button-active';
    document.getElementById('OthersLink').className = document
      .getElementById('OthersLink')
      .className.replace(' button-active');
  };
  const changeOthersColor = e => {
    document.getElementById(
      'LanguagesLink'
    ).className = document
      .getElementById('LanguagesLink')
      .className.replace(' button-active');
    document.getElementById(
      'FrameworksLink'
    ).className = document
      .getElementById('FrameworksLink')
      .className.replace(' button-active');
    document.getElementById('OthersLink').className += ' button-active';
  };

  const changeData = skillName => {
    const tabContent = document.getElementsByClassName('tabcontent');
    for (let i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = 'none';
    }

    document.getElementById(skillName).style.display = 'block';
  };

  return (
    <div className="skills-right">
      <h3 className="center-align">WORK EXPERTISE</h3>
      <p className="center-align">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At, maiores?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, fugiat.
      </p>
      <div className="row" id="skillsshow">
        <div className="skills-sidenav">
          <button
            className="navlinks button-active"
            id="LanguagesLink"
            onClick={e => {
              changeLanguageColor();
              changeData('Language');
            }}
            style={{ marginTop: '55px' }}
          >
            Languages
          </button>
          <button
            onClick={e => {
              changeFrameworksColor();
              changeData('Frameworks');
            }}
            className="navlinks"
            id="FrameworksLink"
          >
            Frameworks
          </button>
          <button
            onClick={e => {
              changeOthersColor();
              changeData('Others');
            }}
            className="navlinks"
            id="OthersLink"
          >
            Others
          </button>
        </div>
        <div className="skills-data">
          <div id="Language" class="tabcontent" style={{ display: 'block' }}>
            <Skill title="HTML" percentage="84%" cls="line-html" />
            <Skill title="CSS" percentage="75%" cls="line-css" />
            <Skill title="Javascript" percentage="79%" cls="line-js" />
            <Skill title="NodeJS" percentage="68%" cls="line-node" />
          </div>
          <div id="Frameworks" class="tabcontent">
            <Skill title="ReactJS" percentage="79%" cls="line-react" />
            <Skill title="ExpressJS" percentage="75%" cls="line-express" />
            <Skill title="Materialize-css" percentage="89%" cls="line-mc" />
          </div>
          <div id="Others" class="tabcontent">
            <Skill title="Redux" percentage="78%" cls="line-redux" />
            <Skill title="axios" percentage="75%" cls="line-axios" />
            <Skill title="MongoDB" percentage="78%" cls="line-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Skill = props => {
  const { title, percentage, cls } = props;
  return (
    <div className="row" style={{ margin: '0px' }}>
      <div className="row" style={{ margin: '0px' }}>
        <p style={{ float: 'left' }}>{title}</p>
        <p style={{ float: 'right' }}>{percentage}</p>
      </div>
      <div className="line-out">
        <div className={`line-in ${cls}`} />
      </div>
    </div>
  );
};

export default Skills;
