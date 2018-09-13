import React from 'react';
import ProfileLogo from '../assets/img/profile.jpg';
import '../assets/css/sidebar.css';

export default props =>
    <div className="sidebar left">
      <div className="sidebar-content">
        <div className="sidebar-profile-content">
          <div className="sidebar-profile-image-wrap">
            <img src={ProfileLogo}  alt="Profile Ikigami"/>
          </div>
          <div className="sidebar-profile-details">
            <h5 className="text-center theme-text">Franz Monzales</h5>
            <p className="text-center">Full Stack Web Developer / Programmer</p>
          </div>
        </div>
      </div>
      <div className="sidebar-profile-list-page">
        <ul>
          <li>
            <a href="#home">
              <i className="fa fa-home"></i>HOME
            </a>
          </li>
          <li>
            <a href="#about">
              <i className="fa fa-pencil"></i>ABOUT ME
            </a>
          </li>
          <li>
            <a href="#skill">
              <i className="fa fa-code"></i>SKILL
            </a>
          </li>
          <li>
            <a href="#experience">
              <i className="fa fa-bar-chart"></i>EXPERIENCE
            </a>
          </li>
          <li>
            <a href="#service">
              <i className="fa fa-server"></i>SERVICE
            </a>
          </li>
          <li>
            <a href="#blog">
              <i className="fa fa-newspaper-o"></i>BLOG
            </a>
          </li>
          <li>
            <a href="#contact">
              <i className="fa fa-phone-square"></i>CONTACT
            </a>
          </li>
        </ul>
      </div>
    </div>
