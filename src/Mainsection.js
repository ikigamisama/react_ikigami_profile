import React, { Component } from 'react';
import FloaterButton from './components/FloaterButton';
import IntroWrapper from './section/sub_section/IntroWrapper';
import AboutWrapper from './section/sub_section/AboutWrapper';
import SkillsWrapper from './section/sub_section/SkillsWrapper';
import ExperienceWrapper from './section/sub_section/ExperienceWrapper';
import ServiceWrapper from './section/sub_section/ServiceWrapper';
import InterestWrapper from './section/sub_section/InterestWrapper';
import ContactWrapper from './section/sub_section/ContactWrapper';

export default class Mainsection extends Component{
  render(){
    return(
      <React.Fragment>
          <FloaterButton/>
          <IntroWrapper />
          <AboutWrapper />
          <SkillsWrapper />
          <ExperienceWrapper />
          <ServiceWrapper />
          <InterestWrapper />
          <ContactWrapper />
      </React.Fragment>
    )
  }
}
